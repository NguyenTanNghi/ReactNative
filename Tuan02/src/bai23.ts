export async function fetchCompletedTodos() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await res.json();
        const completed = todos.filter((t: any) => t.completed);
        console.log("Bai23 Completed Todos:", completed);
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}
