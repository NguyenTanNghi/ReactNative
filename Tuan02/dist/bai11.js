"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSayHello = runSayHello;
const bai01_1 = require("./bai01");
async function runSayHello() {
    try {
        const message = await bai01_1.sayHelloAsync;
        console.log(message);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
