"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai01_1 = require("./bai01");
const bai02_1 = require("./bai02");
const bai03_1 = require("./bai03");
const bai04_1 = require("./bai04");
const bai05_1 = require("./bai05");
const bai06_1 = require("./bai06");
const bai07_1 = require("./bai07");
const bai08_1 = require("./bai08");
const bai09_1 = require("./bai09");
const bai10_1 = require("./bai10");
// ===================== Bai 01 =====================
bai01_1.sayHelloAsync.then((message) => {
    console.log(message);
});
// ===================== Bai 02 =====================
(0, bai02_1.getNumberAsync)().then((num) => {
    console.log(num);
});
// ===================== Bai 03 =====================
(0, bai03_1.throwErrorAsync)()
    .then(() => {
    console.log("This will not run");
})
    .catch((error) => {
    console.error(error.message);
});
// ===================== Bai 04 =====================
(0, bai04_1.getRandomNumber)()
    .then((num) => {
    console.log("Random number:", num);
})
    .catch((err) => {
    console.error("Error:", err.message);
});
// ===================== Bai 05 =====================
(0, bai05_1.simulateTask)(1000).then((msg) => {
    console.log(msg);
});
// ===================== Bai 06 =====================
(0, bai06_1.runAllTasks)();
// ===================== Bai 07 =====================
(0, bai07_1.runRace)();
// ===================== Bai 08 =====================
(0, bai08_1.processNumber)();
// ===================== Bai 09 =====================
(0, bai09_1.filterEvenNumbers)([1, 2, 3, 4, 5, 6])
    .then(evens => {
    console.log("Even numbers:", evens);
});
// ===================== Bai 10 =====================
(0, bai10_1.getResult)(false)
    .then(result => {
    console.log("Result:", result);
})
    .catch(error => {
    console.error("Error:", error);
})
    .finally(() => {
    console.log("Done");
});
