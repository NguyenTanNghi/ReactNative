import { simulateTask } from "./bai05";

export async function runAllTasks() {
  try {
    const results = await Promise.all([
      simulateTask(1000),
      simulateTask(2000),
      simulateTask(1500),
    ]);

    console.log("All tasks completed:");
    results.forEach((result, index) => {
      console.log(`Task ${index + 1}: ${result}`);
    });
  } catch (error) {
    console.error("One of the tasks failed:", error);
  }
}
