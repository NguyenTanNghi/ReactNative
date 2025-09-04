"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMultipleTodos = fetchMultipleTodos;
async function fetchMultipleTodos() {
    try {
        const urls = [
            "https://jsonplaceholder.typicode.com/todos/1",
            "https://jsonplaceholder.typicode.com/todos/2",
            "https://jsonplaceholder.typicode.com/todos/3"
        ];
        for (const url of urls) {
            const res = await fetch(url);
            const todo = await res.json();
            console.log("Bai22:", todo);
        }
    }
    catch (error) {
        console.error("Error fetching multiple todos:", error);
    }
}
