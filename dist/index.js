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
    new bai08_1.Product("Webcam", 150),
];
const expensiveProducts = products.filter((product) => product.price > 100);
console.log("\n===================== Bai 08 =====================");
console.log("Products with price > 100:");
expensiveProducts.forEach((product) => product.displayInfo());
// bai 09
const dog = new bai09_1.Dog("Husky");
const cat = new bai09_1.Cat("Tom");
console.log("\n===================== Bai 09 =====================");
dog.sound();
cat.sound();
// bai 10
const acc = new bai10_1.Account("123-456", "Nguyen Tan Nghi", 1000);
console.log("\n===================== Bai 10 =====================");
console.log(`Account Number: ${acc.accountNumber}`);
console.log(`Owner: ${acc.owner}`);
console.log(`Initial Balance: $${acc.getBalance()}`);
acc.deposit(500);
acc.withdraw(300);
acc.withdraw(2000);
// bai 11
const dog11 = new bai11_1.Dog("Husky");
const cat11 = new bai11_1.Cat("Tom");
console.log("\n===================== Bai 11 =====================");
dog11.move();
dog11.bark();
cat11.move();
cat11.meow();
// bai 12
const bird = new bai12_1.Bird("Eagle");
const fish = new bai12_1.Fish("Salmon");
console.log("\n===================== Bai 12 =====================");
bird.fly();
fish.swim();
// ===================== Bai 13 =====================
const square = new bai13_1.Square(4);
const circle = new bai13_1.Circle(3);
console.log("\n===================== Bai 13 =====================");
console.log(`Square area: ${square.area()}`);
console.log(`Circle area: ${circle.area()}`);
// ===================== Bai 14 =====================
const manager = new bai14_1.Manager("Alice");
const dev = new bai14_1.Developer("Bob");
console.log("\n===================== Bai 14 =====================");
manager.work();
manager.manage();
dev.work();
dev.code();
// ===================== Bai 15 =====================
const library = new bai15_1.Library();
const book1 = new bai06_1.Book("TS Handbook", "Anders", 2020);
const user1 = new bai07_1.User("Nghi");
console.log("\n===================== Bai 15 =====================");
library.addBook(book1);
library.addUser(user1);
library.listBooks();
// ===================== Bai 16 =====================
const numberBox = new bai16_1.Box(123);
const stringBox = new bai16_1.Box("Hello");
console.log("\n===================== Bai 16 =====================");
console.log(numberBox.getValue());
console.log(stringBox.getValue());
// ===================== Bai 17 =====================
const logger = bai17_1.Logger.getInstance();
console.log("\n===================== Bai 17 =====================");
logger.log("This is a singleton logger!");
// ===================== Bai 18 =====================
console.log("\n===================== Bai 18 =====================");
console.log(`Add: ${bai18_1.MathUtil.add(5, 3)}`);
console.log(`Subtract: ${bai18_1.MathUtil.subtract(5, 3)}`);
console.log(`Multiply: ${bai18_1.MathUtil.multiply(5, 3)}`);
console.log(`Divide: ${bai18_1.MathUtil.divide(10, 2)}`);
// ===================== Bai 19 =====================
const animals19 = [new bai19_1.Dog(), new bai19_1.Cat()];
console.log("\n===================== Bai 19 =====================");
animals19.forEach((a) => a.makeSound());
// ===================== Bai 20 =====================
const car20 = new bai20_1.Car();
const bike = new bai20_1.Bike();
console.log("\n===================== Bai 20 =====================");
car20.move();
bike.move();
// ===================== Bai 21 =====================
const repo = new bai21_1.Repository();
repo.add("Item 1");
repo.add("Item 2");
console.log("\n===================== Bai 21 =====================");
console.log(repo.getAll());
// ===================== Bai 22 =====================
const stack = new bai22_1.Stack();
stack.push(10);
stack.push(20);
console.log("\n===================== Bai 22 =====================");
console.log(`Peek: ${stack.peek()}`);
console.log(`Pop: ${stack.pop()}`);
console.log(`Is Empty: ${stack.isEmpty()}`);
// ===================== Bai 23 =====================
const cash = new bai23_1.CashPayment();
const card = new bai23_1.CardPayment();
console.log("\n===================== Bai 23 =====================");
cash.pay(100);
card.pay(200);
// ===================== Bai 24 =====================
const fan = new bai24_1.Fan();
const ac = new bai24_1.AirConditioner();
console.log("\n===================== Bai 24 =====================");
fan.turnOn();
ac.turnOn();
// ===================== Bai 25 =====================
console.log("\n===================== Bai 25 =====================");
bai25_1.Shape.describe();
// ===================== Bai 26 =====================
const order = new bai26_1.Order();
order.addProduct(new bai08_1.Product("Pen", 5));
order.addProduct(new bai08_1.Product("Notebook", 15));
console.log("\n===================== Bai 26 =====================");
console.log(`Total price: $${order.getTotal()}`);
// ===================== Bai 27 =====================
const teacher = new bai27_1.Teacher("Mr. Smith", 40, "Math");
console.log("\n===================== Bai 27 =====================");
teacher.introduce();
// ===================== Bai 28 =====================
const dog28 = new bai28_1.Dog();
const cat28 = new bai28_1.Cat();
console.log("\n===================== Bai 28 =====================");
dog28["makeSound"](); // gọi protected override
cat28["makeSound"]();
// ===================== Bai 29 =====================
const car29 = new bai29_1.Car();
const robot = new bai29_1.Robot();
console.log("\n===================== Bai 29 =====================");
car29.move();
robot.move();
// ===================== Bai 30 =====================
const school = new bai30_1.School();
const student1 = new bai02_1.Student("Alice", 20, "A");
const student2 = new bai02_1.Student("Bob", 21, "B");
school.addStudent(student1);
school.addStudent(student2);
school.addTeacher(new bai27_1.Teacher("Mrs. Rose", 35, "English"));
console.log("\n===================== Bai 30 =====================");
school.displayInfo();
