"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueProcess = queueProcess;
function simulateTask(id, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} finished`);
        }, delay);
    });
}
async function queueProcess() {
    const tasks = [
        () => simulateTask(1, 1000),
        () => simulateTask(2, 1500),
        () => simulateTask(3, 2000),
    ];
    for (const task of tasks) {
        const result = await task();
        console.log("Bai29 Queue Result:", result);
    }
}
