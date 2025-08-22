"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai01_1 = require("./bai01");
const bai02_1 = require("./bai02");
const bai03_1 = require("./bai03");
const bai04_1 = require("./bai04");
const bai05_1 = require("./bai05");
const bai06_1 = require("./bai06");
// bai 01
const person = new bai01_1.Person("Nguyen Tan Nghi", 21);
console.log("===================== Bai 01 =====================");
person.displayInfo();
// bai 02
const student = new bai02_1.Student("Nguyen Tan Nghi", 21, "A");
console.log("\n===================== Bai 02 =====================");
student.displayInfo();
// bai 03
const myCar = new bai03_1.Car("Toyota", "Corolla", 2022);
console.log("\n===================== Bai 03 =====================");
myCar.showInfo();
// bai 04
const myRectangle = new bai04_1.Rectangle(10, 5);
console.log("\n===================== Bai 04 =====================");
console.log(`Area: ${myRectangle.getArea()}`);
console.log(`Perimeter: ${myRectangle.getPerimeter()}`);
// bai 05
const myAccount = new bai05_1.BankAccount(1000);
console.log("\n===================== Bai 05 =====================");
console.log(`Initial balance: $${myAccount.getBalance()}`);
myAccount.deposit(500); // Nạp thêm 500
myAccount.withdraw(200); // Rút 200
myAccount.withdraw(2000); // Cố gắng rút quá số dư
console.log(`Final balance: $${myAccount.getBalance()}`);
// bai 06
const myBook = new bai06_1.Book("Clean Code", "Robert C. Martin", 2008);
console.log("\n===================== Bai 06 =====================");
myBook.displayInfo();
