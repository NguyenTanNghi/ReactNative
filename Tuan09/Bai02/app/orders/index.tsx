import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { deleteOrder, getOrders, OrderItem } from "../utils/db";

interface GroupedOrder {
    orderId: string;
    orderType: string;
    items: OrderItem[];
    total: number;
}

export default function OrdersScreen() {
    const router = useRouter();
    const [groupedOrders, setGroupedOrders] = useState<GroupedOrder[]>([]);

    useFocusEffect(
        useCallback(() => {
            loadOrders();
        }, [])
    );

    const loadOrders = async () => {
        try {
            const orders = await getOrders();
            const grouped: { [key: string]: GroupedOrder } = {};

            orders.forEach((order) => {
                if (!grouped[order.orderId]) {
                    grouped[order.orderId] = {
                        orderId: order.orderId,
                        orderType: order.orderType,
                        items: [],
                        total: 0,
                    };
                }
                grouped[order.orderId].items.push(order);
                grouped[order.orderId].total +=
                    order.drinkPrice * order.quantity;
            });

            setGroupedOrders(Object.values(grouped));
        } catch (error) {
            console.error("Error loading orders:", error);
        }
    };

    const handleDeleteOrder = async (orderId: string) => {
        Alert.alert(
            "Delete Order",
            "Are you sure you want to delete this order?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: async () => {
                        const order = groupedOrders.find(
                            (o) => o.orderId === orderId
                        );
                        if (order) {
                            for (const item of order.items) {
                                await deleteOrder(item.id);
                            }
                            loadOrders();
                        }
                    },
                },
            ]
        );
    };

    const handlePayNow = (order: GroupedOrder) => {
        Alert.alert(
            "Pay Now",
            `Total: $${order.total}\nProceed with payment?`,
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Pay",
                    onPress: async () => {
                        // Delete the order after payment
                        for (const item of order.items) {
                            await deleteOrder(item.id);
                        }
                        Alert.alert("Success", "Payment completed!");
                        loadOrders();
                    },
                },
            ]
        );
    };

    const renderOrderItem = ({ item }: { item: GroupedOrder }) => {
        const orderColor =
            item.orderType === "CAFE DELIVERY" ? "#00BCD4" : "#9C27B0";

        return (
            <View
                style={[
                    styles.orderCard,
                    { borderLeftColor: orderColor, borderLeftWidth: 4 },
                ]}
            >
                <View
                    style={[
                        styles.orderHeader,
                        { backgroundColor: orderColor },
                    ]}
                >
                    <Text style={styles.orderType}>{item.orderType}</Text>
                    <Text style={styles.orderTotal}>${item.total}</Text>
                </View>
                <View style={styles.orderDetails}>
                    <Text style={styles.orderId}>Order {item.orderId}</Text>
                    {item.items.map((drink, index) => (
                        <View key={index} style={styles.drinkRow}>
                            <View style={styles.drinkImagePlaceholder}>
                                <Text style={styles.drinkImageText}>☕</Text>
                            </View>
                            <View style={styles.drinkInfo}>
                                <Text style={styles.drinkName}>
                                    {drink.drinkName}
                                </Text>
                                <Text style={styles.drinkPrice}>
                                    ${drink.drinkPrice}
                                </Text>
                            </View>
                            <View style={styles.quantityControls}>
                                <TouchableOpacity style={styles.controlButton}>
                                    <Text style={styles.controlButtonText}>
                                        −
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>
                                    {drink.quantity}
                                </Text>
                                <TouchableOpacity style={styles.controlButton}>
                                    <Text style={styles.controlButtonText}>
                                        +
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
                <TouchableOpacity
                    style={styles.payButton}
                    onPress={() => handlePayNow(item)}
                >
                    <Text style={styles.payButtonText}>PAY NOW</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Your orders</Text>
                <TouchableOpacity>
                    <Text style={styles.searchButton}>🔍</Text>
                </TouchableOpacity>
            </View>

            {groupedOrders.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No orders yet</Text>
                    <TouchableOpacity
                        style={styles.addOrderButton}
                        onPress={() => router.push("/drinks")}
                    >
                        <Text style={styles.addOrderButtonText}>Add Order</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <FlatList
                    data={groupedOrders}
                    renderItem={renderOrderItem}
                    keyExtractor={(item) => item.orderId}
                    contentContainerStyle={styles.listContainer}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    backButton: {
        fontSize: 24,
        color: "#333",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    searchButton: {
        fontSize: 20,
    },
    listContainer: {
        padding: 16,
    },
    orderCard: {
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 16,
        overflow: "hidden",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    orderHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
    },
    orderType: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    orderTotal: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    orderDetails: {
        padding: 12,
    },
    orderId: {
        fontSize: 14,
        color: "#666",
        marginBottom: 8,
    },
    drinkRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
    },
    drinkImagePlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: "#8B4513",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    drinkImageText: {
        fontSize: 20,
    },
    drinkInfo: {
        flex: 1,
    },
    drinkName: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
    },
    drinkPrice: {
        fontSize: 12,
        color: "#666",
    },
    quantityControls: {
        flexDirection: "row",
        alignItems: "center",
    },
    controlButton: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: "#4CAF50",
        justifyContent: "center",
        alignItems: "center",
    },
    controlButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    quantityText: {
        marginHorizontal: 10,
        fontSize: 14,
        fontWeight: "600",
        minWidth: 16,
        textAlign: "center",
    },
    payButton: {
        backgroundColor: "#FFA726",
        padding: 12,
        margin: 12,
        borderRadius: 6,
        alignItems: "center",
    },
    payButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyText: {
        fontSize: 18,
        color: "#999",
        marginBottom: 20,
    },
    addOrderButton: {
        backgroundColor: "#4CAF50",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    addOrderButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
