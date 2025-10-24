import { getTodos, insertTodo, clearAllTodos } from "../database/db";

const API_URL = "https://68e6175321dd31f22cc41c7a.mockapi.io/todo";

/** 🔄 Tải dữ liệu từ Cloud về SQLite */
export async function syncFromCloud() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    clearAllTodos();
    data.forEach((item: any) => insertTodo(item.name));

    console.log("✅ Đồng bộ Cloud -> Local thành công");
    return true;
  } catch (err) {
    console.error("❌ Lỗi khi đồng bộ từ Cloud:", err);
    return false;
  }
}

/** 🔼 Đẩy dữ liệu SQLite lên Cloud */
export async function syncToCloud() {
  try {
    const todos = getTodos();
    for (const todo of todos) {
      await fetch(`${API_URL}/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: todo.name }),
      });
    }
    console.log("✅ Đồng bộ Local -> Cloud thành công");
    return true;
  } catch (err) {
    console.error("❌ Lỗi đồng bộ lên Cloud:", err);
    return false;
  }
}
