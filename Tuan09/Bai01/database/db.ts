import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("todo.db");

// Khởi tạo bảng + dữ liệu mẫu
export function initDB() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );
  `);

  const count = db.getFirstSync<{ count: number }>("SELECT COUNT(*) as count FROM todos");
  if (count.count === 0) {
    db.runSync("INSERT INTO todos (name) VALUES (?)", ["Học React Native"]);
    db.runSync("INSERT INTO todos (name) VALUES (?)", ["Hoàn thành bài tập SQLite"]);
    db.runSync("INSERT INTO todos (name) VALUES (?)", ["Ôn thi cuối kỳ"]);
    console.log("✅ Database khởi tạo với dữ liệu mẫu");
  }
}

export function getTodos() {
  return db.getAllSync<{ id: number; name: string }>("SELECT * FROM todos ORDER BY id DESC");
}

export function insertTodo(name: string) {
  db.runSync("INSERT INTO todos (name) VALUES (?)", [name]);
}

export function updateTodo(id: number, name: string) {
  db.runSync("UPDATE todos SET name = ? WHERE id = ?", [name, id]);
}

export function deleteTodo(id: number) {
  db.runSync("DELETE FROM todos WHERE id = ?", [id]);
}

export function clearAllTodos() {
  db.runSync("DELETE FROM todos");
}

export function getTodoById(id: number) {
  return db.getFirstSync<{ id: number; name: string }>("SELECT * FROM todos WHERE id = ?", [id]);
}

export default db;
