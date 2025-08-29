import { simulateTask } from "./bai05";

export async function runRace() {
  try {
    const firstResult = await Promise.race([
      simulateTask(1000),
      simulateTask(2000),
      simulateTask(1500),
    ]);

    console.log("First task completed:", firstResult);
  } catch (error) {
    console.error("Error:", error);
  }
}