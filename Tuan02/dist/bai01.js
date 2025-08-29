"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHelloAsync = void 0;
exports.sayHelloAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
