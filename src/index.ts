import { Person } from "./bai01";
import { Student } from "./bai02";
import { Car } from "./bai03";
import { Rectangle } from "./bai04";
import { BankAccount } from "./bai05";
import { Book } from "./bai06";

// bai 01
const person = new Person("Nguyen Tan Nghi", 21);
console.log("===================== Bai 01 =====================");
person.displayInfo();

// bai 02
const student = new Student("Nguyen Tan Nghi", 21, "A");
console.log("\n===================== Bai 02 =====================");
student.displayInfo();

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

myAccount.deposit(500); // Nạp thêm 500
myAccount.withdraw(200); // Rút 200
myAccount.withdraw(2000); // Cố gắng rút quá số dư
console.log(`Final balance: $${myAccount.getBalance()}`);

// bai 06
const myBook = new Book("Clean Code", "Robert C. Martin", 2008);
console.log("\n===================== Bai 06 =====================");
myBook.displayInfo();




