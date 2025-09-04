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
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai27_1 = require("./bai27");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai30_1 = require("./bai30");
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
// ===================== Bai 11 =====================
(0, bai11_1.runSayHello)();
// ===================== Bai 12 =====================
(0, bai12_1.runTask)();
// ===================== Bai 13 =====================
(0, bai13_1.runTaskWithErrorHandling)();
// ===================== Bai 14 =====================
(0, bai14_1.multiplyAfterDelay)(5).then(result => console.log("Bai14:", result));
// ===================== Bai 15 =====================
(0, bai15_1.runSequential)();
// ===================== Bai 16 =====================
(0, bai16_1.runParallel)();
// ===================== Bai 17 =====================
(0, bai17_1.runForAwait)();
// ===================== Bai 18 =====================
(0, bai18_1.fetchUser)(1).then(user => console.log("Bai18:", user));
// ===================== Bai 19 =====================
(0, bai19_1.fetchUsers)([1, 2, 3]).then(users => console.log("Bai19:", users));
// ===================== Bai 20 =====================
(0, bai20_1.fetchUserWithTimeout)(10)
    .then(user => console.log("Bai20:", user))
    .catch(err => console.error("Bai20 Error:", err.message));
// ===================== Bai 21 =====================
(0, bai21_1.fetchTodo)();
// ===================== Bai 22 =====================
(0, bai22_1.fetchMultipleTodos)();
// ===================== Bai 23 =====================
(0, bai23_1.fetchCompletedTodos)();
// ===================== Bai 24 =====================
(0, bai24_1.postData)();
// ===================== Bai 25 =====================
(0, bai25_1.downloadFile)();
// ===================== Bai 26 =====================
(0, bai26_1.waitFiveSeconds)();
// ===================== Bai 27 =====================
(0, bai27_1.fetchWithRetry)("https://jsonplaceholder.typicode.com/todos/1", 3);
// ===================== Bai 28 =====================
(0, bai28_1.batchProcess)();
// ===================== Bai 29 =====================
(0, bai29_1.queueProcess)();
// ===================== Bai 30 =====================
(0, bai30_1.runAllSettled)();
