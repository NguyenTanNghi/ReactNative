"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwErrorAsync = throwErrorAsync;
function throwErrorAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}
