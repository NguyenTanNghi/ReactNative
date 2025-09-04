import { simulateTask } from "./bai05";

export async function runTaskWithErrorHandling() {
    try {
        const result = await simulateTask(2000);
        console.log(result);
    } catch (error) {
        console.error("Caught an error:", error);
    }
}
