import { sayHelloAsync } from "./bai01";
import { getNumberAsync } from "./bai02";
import { throwErrorAsync } from "./bai03";
import { getRandomNumber } from "./bai04";
import { simulateTask } from "./bai05";
import { runAllTasks } from "./bai06";
import { runRace } from "./bai07";
import { processNumber } from "./bai08";
import { filterEvenNumbers } from "./bai09";
import { getResult } from "./bai10";
import { runSayHello } from "./bai11";
import { runTask } from "./bai12";
import { runTaskWithErrorHandling } from "./bai13";
import { multiplyAfterDelay } from "./bai14";
import { runSequential } from "./bai15";
import { runParallel } from "./bai16";
import { runForAwait } from "./bai17";
import { fetchUser } from "./bai18";
import { fetchUsers } from "./bai19";
import { fetchUserWithTimeout } from "./bai20";
import { fetchTodo } from "./bai21";
import { fetchMultipleTodos } from "./bai22";
import { fetchCompletedTodos } from "./bai23";
import { postData } from "./bai24";
import { downloadFile } from "./bai25";
import { waitFiveSeconds } from "./bai26";
import { fetchWithRetry } from "./bai27";
import { batchProcess } from "./bai28";
import { queueProcess } from "./bai29";
import { runAllSettled } from "./bai30";

// ===================== Bai 01 =====================
sayHelloAsync.then((message) => {
    console.log(message);
});

// ===================== Bai 02 =====================
getNumberAsync().then((num) => {
    console.log(num);
});

// ===================== Bai 03 =====================
throwErrorAsync()
    .then(() => {
        console.log("This will not run");
    })
    .catch((error) => {
        console.error(error.message);
    });

// ===================== Bai 04 =====================
getRandomNumber()
    .then((num) => {
        console.log("Random number:", num);
    })
    .catch((err) => {
        console.error("Error:", err.message);
    });

// ===================== Bai 05 =====================
simulateTask(1000).then((msg) => {
    console.log(msg);
});

// ===================== Bai 06 =====================
runAllTasks();

// ===================== Bai 07 =====================
runRace();

// ===================== Bai 08 =====================
processNumber();

// ===================== Bai 09 =====================
filterEvenNumbers([1, 2, 3, 4, 5, 6]).then((evens) => {
    console.log("Even numbers:", evens);
});

// ===================== Bai 10 =====================
getResult(false)
    .then((result) => {
        console.log("Result:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Done");
    });

// ===================== Bai 11 =====================
runSayHello();

// ===================== Bai 12 =====================
runTask();

// ===================== Bai 13 =====================
runTaskWithErrorHandling();

// ===================== Bai 14 =====================
multiplyAfterDelay(5).then((result) => console.log("Bai14:", result));

// ===================== Bai 15 =====================
runSequential();

// ===================== Bai 16 =====================
runParallel();

// ===================== Bai 17 =====================
runForAwait();

// ===================== Bai 18 =====================
fetchUser(1).then((user) => console.log("Bai18:", user));

// ===================== Bai 19 =====================
fetchUsers([1, 2, 3]).then((users) => console.log("Bai19:", users));

// ===================== Bai 20 =====================
fetchUserWithTimeout(10)
    .then((user) => console.log("Bai20:", user))
    .catch((err) => console.error("Bai20 Error:", err.message));

// ===================== Bai 21 =====================
fetchTodo();

// ===================== Bai 22 =====================
fetchMultipleTodos();

// ===================== Bai 23 =====================
fetchCompletedTodos();

// ===================== Bai 24 =====================
postData();

// ===================== Bai 25 =====================
downloadFile();

// ===================== Bai 26 =====================
waitFiveSeconds();

// ===================== Bai 27 =====================
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);

// ===================== Bai 28 =====================
batchProcess();

// ===================== Bai 29 =====================
queueProcess();

// ===================== Bai 30 =====================
runAllSettled();
