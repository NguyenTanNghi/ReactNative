import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getTodos, insertTodo, updateTodo, deleteTodo, initDB, getTodoById, clearAllTodos } from "../database/db";

type Todo = { id: number; name: string };

interface SQLiteContextType {
  todos: Todo[];
  addTodo: (name: string) => void;
  editTodo: (id: number, name: string) => void;
  removeTodo: (id: number) => void;
  reloadTodos: () => void;
  getById: (id: number) => Todo | undefined;
  clearAll: () => void;
}

const SQLiteContext = createContext<SQLiteContextType | undefined>(undefined);

export const SQLiteProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = () => {
    const data = getTodos();
    setTodos(data);
  };

  useEffect(() => {
    initDB();
    loadTodos();
  }, []);

  const addTodo = (name: string) => {
    insertTodo(name);
    loadTodos();
  };

  const editTodo = (id: number, name: string) => {
    updateTodo(id, name);
    loadTodos();
  };

  const removeTodo = (id: number) => {
    deleteTodo(id);
    loadTodos();
  };

  const clearAll = () => {
    clearAllTodos();
    loadTodos();
  };

  const getById = (id: number) => todos.find((t) => t.id === id);

  return (
    <SQLiteContext.Provider value={{ todos, addTodo, editTodo, removeTodo, reloadTodos: loadTodos, getById, clearAll }}>
      {children}
    </SQLiteContext.Provider>
  );
};

export const useSQLite = () => {
  const ctx = useContext(SQLiteContext);
  if (!ctx) throw new Error("useSQLite must be used within SQLiteProvider");
  return ctx;
};
