"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTodo = fetchTodo;
async function fetchTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log("Bai21:", data);
    }
    catch (error) {
        console.error("Error fetching todo:", error);
    }
}
