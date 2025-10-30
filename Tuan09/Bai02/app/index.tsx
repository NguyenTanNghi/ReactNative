import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Cafe world</Text>

            <View style={styles.imageContainer}>
                <View style={styles.imagePlaceholder}>
                    <Text style={styles.imageText}>☕ JEWEL BOX</Text>
                </View>
                <View style={styles.imagePlaceholder}>
                    <Text style={styles.imageText}>☕ COFFEE</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.startButton}
                onPress={() => router.push("/drinks")}
            >
                <Text style={styles.startButtonText}>GET STARTED</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.ordersButton}
                onPress={() => router.push("/orders")}
            >
                <Text style={styles.ordersButtonText}>View Your Orders</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 40,
    },
    imageContainer: {
        width: "100%",
        marginBottom: 40,
    },
    imagePlaceholder: {
        width: "100%",
        height: 120,
        backgroundColor: "#8B4513",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    imageText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    startButton: {
        backgroundColor: "#00BCD4",
        paddingHorizontal: 40,
        paddingVertical: 16,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
        marginBottom: 12,
    },
    startButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    ordersButton: {
        backgroundColor: "#4CAF50",
        paddingHorizontal: 40,
        paddingVertical: 16,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
    },
    ordersButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
