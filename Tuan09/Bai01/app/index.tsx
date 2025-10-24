import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleStart = () => {
    if (!name.trim()) return Alert.alert("Thông báo", "Vui lòng nhập tên của bạn!");
    router.push(`/task?name=${encodeURIComponent(name)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên của bạn"
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.btn} onPress={handleStart}>
        <Text style={styles.btnText}>Bắt đầu →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white", padding: 30 },
  title: { fontSize: 28, fontWeight: "bold", color: "#00BDD5", marginBottom: 40 },
  input: { borderWidth: 1, borderRadius: 10, width: "100%", padding: 10, marginBottom: 20 },
  btn: { backgroundColor: "#00BDD5", padding: 10, borderRadius: 10, width: 200 },
  btnText: { color: "white", fontWeight: "bold", textAlign: "center" },
});
