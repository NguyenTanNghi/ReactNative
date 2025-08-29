"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runRace = runRace;
const bai05_1 = require("./bai05");
async function runRace() {
    try {
        const firstResult = await Promise.race([
            (0, bai05_1.simulateTask)(1000),
            (0, bai05_1.simulateTask)(2000),
            (0, bai05_1.simulateTask)(1500),
        ]);
        console.log("First task completed:", firstResult);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
