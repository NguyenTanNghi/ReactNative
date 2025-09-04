"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runParallel = runParallel;
const bai14_1 = require("./bai14");
async function runParallel() {
    const [r1, r2, r3] = await Promise.all([
        (0, bai14_1.multiplyAfterDelay)(2),
        (0, bai14_1.multiplyAfterDelay)(3),
        (0, bai14_1.multiplyAfterDelay)(4),
    ]);
    console.log("Results in parallel:", r1, r2, r3);
}
