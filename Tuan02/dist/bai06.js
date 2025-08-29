"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAllTasks = runAllTasks;
const bai05_1 = require("./bai05");
async function runAllTasks() {
    try {
        const results = await Promise.all([
            (0, bai05_1.simulateTask)(1000),
            (0, bai05_1.simulateTask)(2000),
            (0, bai05_1.simulateTask)(1500),
        ]);
        console.log("All tasks completed:");
        results.forEach((result, index) => {
            console.log(`Task ${index + 1}: ${result}`);
        });
    }
    catch (error) {
        console.error("One of the tasks failed:", error);
    }
}
