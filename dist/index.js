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
// bai 01
const person = new bai01_1.Person("Nguyen Tan Nghi", 21);
console.log("===================== Bai 01 =====================");
person.displayInfo();
// bai 02
const student = new bai02_1.Student("Nguyen Tan Nghi", 21, "A");
console.log("\n===================== Bai 02 =====================");
student.displayInfoAll();
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
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(2000);
console.log(`Final balance: $${myAccount.getBalance()}`);
// bai 06
const myBook = new bai06_1.Book("Clean Code", "Robert C. Martin", 2008);
console.log("\n===================== Bai 06 =====================");
myBook.displayInfo();
// bai 07
const user = new bai07_1.User("Tan Nghi");
console.log("\n===================== Bai 07 =====================");
user.displayInfo();
user.name = "Nguyen Van A";
console.log(`Updated name: ${user.name}`);
// bai 08
const products = [
    new bai08_1.Product("Mouse", 50),
    new bai08_1.Product("Keyboard", 120),
    new bai08_1.Product("Monitor", 250),
    new bai08_1.Product("USB Cable", 30),
    new bai08_1.Product("Webcam", 150)
];
const expensiveProducts = products.filter(product => product.price > 100);
console.log("\n===================== Bai 08 =====================");
console.log("Products with price > 100:");
expensiveProducts.forEach(product => product.displayInfo());
