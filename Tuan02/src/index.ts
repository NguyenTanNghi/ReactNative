
import { sayHelloAsync } from './bai01';
import { getNumberAsync } from './bai02';
import { throwErrorAsync } from './bai03';
import { getRandomNumber } from './bai04';
import { simulateTask } from './bai05';
import { runAllTasks } from './bai06';
import { runRace } from './bai07';
import { processNumber } from './bai08';
import { filterEvenNumbers } from './bai09';
import { getResult } from './bai10';

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
filterEvenNumbers([1, 2, 3, 4, 5, 6])
    .then(evens => {
        console.log("Even numbers:", evens);
    });

// ===================== Bai 10 =====================
getResult(false)
    .then(result => {
        console.log("Result:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Done");
    });

