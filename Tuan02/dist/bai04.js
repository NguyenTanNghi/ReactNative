"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = getRandomNumber;
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const number = Math.random();
        if (number >= 0) {
            resolve(number);
        }
        else {
            reject(new Error("Failed to generate number"));
        }
    });
}
