import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Drink, fetchDrinks } from "../services/api";
import { addOrder } from "../utils/db";

export default function DrinksScreen() {
    const router = useRouter();
    const [drinks, setDrinks] = useState<Drink[]>([]);
    const [loading, setLoading] = useState(true);
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        loadDrinks();
    }, []);

    const loadDrinks = async () => {
        try {
            const data = await fetchDrinks();
            setDrinks(data);
            const initialQuantities: { [key: number]: number } = {};
            data.forEach((drink) => {
                initialQuantities[drink.id] = 0;
            });
            setQuantities(initialQuantities);
        } catch (error) {
            console.error("Error loading drinks:", error);
        } finally {
            setLoading(false);
        }
    };

    const incrementQuantity = (drinkId: number) => {
        setQuantities((prev) => ({
            ...prev,
            [drinkId]: (prev[drinkId] || 0) + 1,
        }));
    };

    const decrementQuantity = (drinkId: number) => {
        setQuantities((prev) => ({
            ...prev,
            [drinkId]: Math.max(0, (prev[drinkId] || 0) - 1),
        }));
    };

    const handleGoToCart = async () => {
        const orderId = `#${Math.floor(Math.random() * 1000)}`;
        const orderType = Math.random() > 0.5 ? "CAFE DELIVERY" : "CAFE";

        for (const drink of drinks) {
            const quantity = quantities[drink.id] || 0;
            if (quantity > 0) {
                await addOrder(
                    drink.name,
                    drink.price,
                    quantity,
                    orderType,
                    orderId
                );
            }
        }
        router.push("/orders");
    };

    const renderDrinkItem = ({ item }: { item: Drink }) => {
        const quantity = quantities[item.id] || 0;

        return (
            <View style={styles.drinkItem}>
                <View style={styles.drinkInfo}>
                    <View style={styles.drinkImagePlaceholder}>
                        <Text style={styles.drinkImageText}>☕</Text>
                    </View>
                    <View style={styles.drinkDetails}>
                        <Text style={styles.drinkName}>{item.name}</Text>
                        <Text style={styles.drinkPrice}>${item.price}</Text>
                    </View>
                </View>
                <View style={styles.quantityControls}>
                    <TouchableOpacity
                        style={styles.controlButton}
                        onPress={() => decrementQuantity(item.id)}
                    >
                        <Text style={styles.controlButtonText}>−</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity
                        style={styles.controlButton}
                        onPress={() => incrementQuantity(item.id)}
                    >
                        <Text style={styles.controlButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#4CAF50" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Drinks</Text>
                <TouchableOpacity>
                    <Text style={styles.searchButton}>🔍</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={drinks}
                renderItem={renderDrinkItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />

            <TouchableOpacity
                style={styles.cartButton}
                onPress={handleGoToCart}
            >
                <Text style={styles.cartButtonText}>GO TO CART</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
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
    drinkItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
    },
    drinkInfo: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    drinkImagePlaceholder: {
        width: 50,
        height: 50,
        borderRadius: 8,
        backgroundColor: "#8B4513",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    drinkImageText: {
        fontSize: 24,
    },
    drinkDetails: {
        flex: 1,
    },
    drinkName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        marginBottom: 4,
    },
    drinkPrice: {
        fontSize: 14,
        color: "#666",
    },
    quantityControls: {
        flexDirection: "row",
        alignItems: "center",
    },
    controlButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#4CAF50",
        justifyContent: "center",
        alignItems: "center",
    },
    controlButtonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    quantityText: {
        marginHorizontal: 12,
        fontSize: 16,
        fontWeight: "600",
        minWidth: 20,
        textAlign: "center",
    },
    cartButton: {
        backgroundColor: "#FFA726",
        padding: 16,
        margin: 16,
        borderRadius: 8,
        alignItems: "center",
    },
    cartButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
