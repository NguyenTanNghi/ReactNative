"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchProcess = batchProcess;
function simulateTask(id, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} finished`);
        }, delay);
    });
}
async function batchProcess() {
    const tasks = [
        simulateTask(1, 1000),
        simulateTask(2, 1500),
        simulateTask(3, 2000),
        simulateTask(4, 2500),
        simulateTask(5, 3000),
    ];
    const results = await Promise.all(tasks);
    console.log("Bai28 Batch Results:", results);
}
