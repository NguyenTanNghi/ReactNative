import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Modal,
    StyleSheet,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    const handleStart = () => {
        if (!name.trim()) {
            setVisible(true);
            return;
        }
        router.push(`/task?name=${encodeURIComponent(name)}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Modal transparent visible={visible} animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Thông báo</Text>
                        <Text style={styles.modalMessage}>
                            Vui lòng nhập tên trước khi tiếp tục!
                        </Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => setVisible(false)}
                        >
                            <Text style={styles.modalButtonText}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Image source={require("../assets/Image95.png")} />

            <View style={{ alignItems: "center", marginVertical: 40 }}>
                <Text style={styles.title}>manage your</Text>
                <Text style={styles.title}>task</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={setName}
                    placeholder="Enter your name"
                    placeholderTextColor="rgba(0,0,0,0.3)"
                    style={styles.input}
                />
            </View>

            <TouchableOpacity onPress={handleStart} style={styles.button}>
                <Text style={styles.btnText}>get started →</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        color: "#6D50C8",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        width: "100%",
        marginVertical: 40,
    },
    input: { paddingHorizontal: 15, paddingVertical: 10 },
    button: {
        backgroundColor: "#00BDD5",
        padding: 10,
        borderRadius: 10,
        width: 200,
    },
    btnText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: "white",
        width: 300,
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    modalTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
    modalMessage: { fontSize: 16, marginBottom: 20, textAlign: "center" },
    modalButton: {
        backgroundColor: "#00BDD5",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 25,
    },
    modalButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
