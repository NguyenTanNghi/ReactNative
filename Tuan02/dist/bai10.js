"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResult = getResult;
function getResult(shouldSucceed = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve("Success");
            }
            else {
                reject("Something went wrong");
            }
        }, 1000);
    });
}
