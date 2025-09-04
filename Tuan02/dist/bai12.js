"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTask = runTask;
const bai05_1 = require("./bai05");
async function runTask() {
    try {
        const result = await (0, bai05_1.simulateTask)(2000);
        console.log(result);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
