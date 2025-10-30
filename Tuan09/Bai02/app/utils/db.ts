import * as SQLite from "expo-sqlite";

export interface OrderItem {
    id: number;
    drinkName: string;
    drinkPrice: number;
    quantity: number;
    orderType: string; // 'CAFE DELIVERY' or 'CAFE'
    orderId: string;
    createdAt: string;
}

let db: SQLite.SQLiteDatabase;

export const initDatabase = async () => {
    db = await SQLite.openDatabaseAsync("orders.db");

    await db.execAsync(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      drinkName TEXT NOT NULL,
      drinkPrice REAL NOT NULL,
      quantity INTEGER NOT NULL,
      orderType TEXT NOT NULL,
      orderId TEXT NOT NULL,
      createdAt TEXT NOT NULL
    );
  `);
};

export const addOrder = async (
    drinkName: string,
    drinkPrice: number,
    quantity: number,
    orderType: string,
    orderId: string
) => {
    const createdAt = new Date().toISOString();

    const result = await db.runAsync(
        "INSERT INTO orders (drinkName, drinkPrice, quantity, orderType, orderId, createdAt) VALUES (?, ?, ?, ?, ?, ?)",
        [drinkName, drinkPrice, quantity, orderType, orderId, createdAt]
    );

    return result.lastInsertRowId;
};

export const getOrders = async (): Promise<OrderItem[]> => {
    const allRows = await db.getAllAsync(
        "SELECT * FROM orders ORDER BY createdAt DESC"
    );
    return allRows as OrderItem[];
};

export const deleteOrder = async (id: number) => {
    await db.runAsync("DELETE FROM orders WHERE id = ?", [id]);
};

export const clearAllOrders = async () => {
    await db.runAsync("DELETE FROM orders");
};

export const getOrdersByOrderId = async (
    orderId: string
): Promise<OrderItem[]> => {
    const rows = await db.getAllAsync(
        "SELECT * FROM orders WHERE orderId = ?",
        [orderId]
    );
    return rows as OrderItem[];
};
