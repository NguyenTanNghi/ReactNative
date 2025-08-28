import { Person } from "./bai01";
import { Student } from "./bai02";
import { Car } from "./bai03";
import { Rectangle } from "./bai04";
import { BankAccount } from "./bai05";
import { Book } from "./bai06";
import { User } from "./bai07";
import { Product } from "./bai08";

// bai 01
const person = new Person("Nguyen Tan Nghi", 21);
console.log("===================== Bai 01 =====================");
person.displayInfo();

// bai 02
const student = new Student("Nguyen Tan Nghi", 21, "A");
console.log("\n===================== Bai 02 =====================");
student.displayInfoAll();

// bai 03
const myCar = new Car("Toyota", "Corolla", 2022);
console.log("\n===================== Bai 03 =====================");
myCar.showInfo();

// bai 04
const myRectangle = new Rectangle(10, 5);
console.log("\n===================== Bai 04 =====================");
console.log(`Area: ${myRectangle.getArea()}`);
console.log(`Perimeter: ${myRectangle.getPerimeter()}`);

// bai 05
const myAccount = new BankAccount(1000);
console.log("\n===================== Bai 05 =====================");
console.log(`Initial balance: $${myAccount.getBalance()}`);

myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(2000);
console.log(`Final balance: $${myAccount.getBalance()}`);

// bai 06
const myBook = new Book("Clean Code", "Robert C. Martin", 2008);
console.log("\n===================== Bai 06 =====================");
myBook.displayInfo();

// bai 07
const user = new User("Tan Nghi");
console.log("\n===================== Bai 07 =====================");
user.displayInfo();
user.name = "Nguyen Van A";
console.log(`Updated name: ${user.name}`);


// bai 08
const products: Product[] = [
    new Product("Mouse", 50),
    new Product("Keyboard", 120),
    new Product("Monitor", 250),
    new Product("USB Cable", 30),
    new Product("Webcam", 150)
];

const expensiveProducts = products.filter(product => product.price > 100);
console.log("\n===================== Bai 08 =====================");
console.log("Products with price > 100:");
expensiveProducts.forEach(product => product.displayInfo());

// bai 09







