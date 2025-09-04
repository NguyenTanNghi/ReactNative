"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runForAwait = runForAwait;
const bai14_1 = require("./bai14");
async function runForAwait() {
    const promises = [2, 3, 4].map(n => (0, bai14_1.multiplyAfterDelay)(n));
    for await (const result of promises) {
        console.log("Result from for-await-of:", result);
    }
}
