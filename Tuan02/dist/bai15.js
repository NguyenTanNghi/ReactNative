"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSequential = runSequential;
const bai14_1 = require("./bai14");
async function runSequential() {
    const result1 = await (0, bai14_1.multiplyAfterDelay)(2);
    console.log("Result 1:", result1);
    const result2 = await (0, bai14_1.multiplyAfterDelay)(3);
    console.log("Result 2:", result2);
    const result3 = await (0, bai14_1.multiplyAfterDelay)(4);
    console.log("Result 3:", result3);
}
