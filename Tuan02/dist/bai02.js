"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberAsync = getNumberAsync;
function getNumberAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
