import { View, Text, FlatList, TouchableOpacity, StyleSheet, RefreshControl, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSQLite } from "../context/SQLiteContext";
import { syncFromCloud, syncToCloud } from "../utils/syncService";
import { useState } from "react";

export default function TaskScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const router = useRouter();
  const { todos, reloadTodos, removeTodo } = useSQLite();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    reloadTodos();
    setTimeout(() => setRefreshing(false), 500);
  };

  const handleDelete = (id: number) => {
    Alert.alert("Xác nhận", "Bạn có chắc muốn xóa công việc này không?", [
      { text: "Hủy", style: "cancel" },
      { text: "Xóa", style: "destructive", onPress: () => removeTodo(id) },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Xin chào, {name}</Text>

        <View style={styles.syncGroup}>
          <TouchableOpacity onPress={async () => {
            const ok = await syncFromCloud();
            if (ok) reloadTodos();
          }}>
            <Text style={styles.syncText}>⬇️</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={async () => {
            const ok = await syncToCloud();
            if (ok) reloadTodos();
          }}>
            <Text style={styles.syncText}>⬆️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={{ flex: 1 }}>{item.name}</Text>
            <TouchableOpacity onPress={() => router.push(`/add?id=${item.id}`)}>
              <Text style={styles.edit}>✏️</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.delete}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />

      <TouchableOpacity style={styles.addBtn} onPress={() => router.push("/add")}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  syncGroup: { flexDirection: "row" },
  syncText: { fontSize: 22, marginHorizontal: 6, color: "#00BDD5" },
  header: { fontSize: 22, fontWeight: "bold" },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E8EA",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  edit: { fontSize: 18, marginHorizontal: 8 },
  delete: { fontSize: 18, color: "red" },
  addBtn: {
    backgroundColor: "#00BDD5",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  addText: { color: "white", fontSize: 24, fontWeight: "bold" },
});
