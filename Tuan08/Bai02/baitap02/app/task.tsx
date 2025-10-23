import {
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams, useRouter, useFocusEffect } from "expo-router";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const API_URL = "https://68e6175321dd31f22cc41c7a.mockapi.io/todo";

export default function TaskScreen() {
  const router = useRouter();
  const { name } = useLocalSearchParams<{ name: string }>();
  const searchRef = useRef<TextInput | null>(null);

  const [tasks, setTasks] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  // ✅ Hàm tải dữ liệu từ API
  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("❌ Lỗi tải todo:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // ✅ Lần đầu vào màn hình: tải dữ liệu
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // ✅ Mỗi khi màn hình được focus lại (quay từ Add về), reload lại danh sách
  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [fetchTasks])
  );

  // ✅ Kéo để reload
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchTasks();
  }, [fetchTasks]);

  // ✅ Xử lý tìm kiếm
  const handleSearch = useCallback(() => {
    if (!search.trim()) {
      fetchTasks();
      return;
    }
    const filtered = tasks.filter((t) =>
      t.name.toLowerCase().includes(search.toLowerCase())
    );
    setTasks(filtered);
    searchRef.current?.clear();
  }, [search, tasks, fetchTasks]);

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  // ✅ Loading UI
  if (loading)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#00BDD5" />
        <Text style={{ marginTop: 8 }}>Đang tải dữ liệu...</Text>
      </View>
    );

  // ✅ UI chính
  return (
    <SafeAreaView style={styles.container}>
      {/* Header chào user */}
      <View style={styles.header}>
        <Image source={require("../assets/Avatar31.png")} style={styles.avatar} />
        <View>
          <Text style={styles.greeting}>Hi {name}</Text>
          <Text style={{ color: "gray" }}>Have a great day ahead!</Text>
        </View>
      </View>

      {/* Ô tìm kiếm */}
      <View style={styles.searchBox}>
        <TouchableOpacity onPress={handleSearch}>
          <Image source={require("../assets/mingcute_search-fill.png")} />
        </TouchableOpacity>
        <TextInput
          ref={searchRef}
          onChangeText={setSearch}
          placeholder="Search"
          placeholderTextColor="rgba(0,0,0,0.3)"
          style={styles.searchInput}
        />
      </View>

      {/* Danh sách công việc */}
      <FlatList
        data={memoizedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/mdi_marker-tick.png")}
                style={{ marginRight: 5 }}
              />
              <Text>{item.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => router.push(`/add?id=${item.id}&name=${item.name}`)}
            >
              <Image
                source={require("../assets/iconamoon_edit-bold.png")}
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      {/* Nút thêm công việc */}
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("/add")}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// 🎨 STYLE
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  greeting: { fontSize: 18, fontWeight: "bold" },
  searchBox: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: { flex: 1, paddingVertical: 8 },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E5E8EA",
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  editIcon: { backgroundColor: "red", padding: 8, borderRadius: 20 },
  addButton: {
    backgroundColor: "#00BDD5",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: { color: "white", fontSize: 24, fontWeight: "bold" },
});
