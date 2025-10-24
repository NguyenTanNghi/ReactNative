import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useSQLite } from "../context/SQLiteContext";
import { useEffect, useState } from "react";

export default function AddScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { addTodo, editTodo, getById } = useSQLite();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (id) {
      const todo = getById(Number(id));
      if (todo) setValue(todo.name);
    }
  }, [id]);

  const handleSave = () => {
    if (!value.trim()) return Alert.alert("Thông báo", "Vui lòng nhập công việc!");
    if (id) editTodo(Number(id), value);
    else addTodo(value);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{id ? "Chỉnh sửa công việc" : "Thêm công việc"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập công việc..."
        onChangeText={setValue}
        value={value}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSave}>
        <Text style={styles.btnText}>Lưu →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 30, textAlign: "center" },
  input: { borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 20 },
  btn: { backgroundColor: "#00BDD5", padding: 10, borderRadius: 10 },
  btnText: { color: "white", fontWeight: "bold", textAlign: "center" },
});
