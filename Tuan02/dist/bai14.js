"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyAfterDelay = multiplyAfterDelay;
async function multiplyAfterDelay(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}
