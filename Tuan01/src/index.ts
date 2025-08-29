import { Person } from "./bai01";
import { Student } from "./bai02";
import { Car } from "./bai03";
import { Rectangle } from "./bai04";
import { BankAccount } from "./bai05";
import { Book } from "./bai06";
import { User } from "./bai07";
import { Product } from "./bai08";
import { Cat, Dog } from "./bai09";
import { Account } from "./bai10";
import { Dog as Dog11, Cat as Cat11 } from "./bai11";
import { Bird, Fish } from "./bai12";
import { Square, Circle } from "./bai13";
import { Manager, Developer } from "./bai14";
import { Library } from "./bai15";
import { Box } from "./bai16";
import { Logger } from "./bai17";
import { MathUtil } from "./bai18";
import { Animal as Animal19, Dog as Dog19, Cat as Cat19 } from "./bai19";
import { Car as Car20, Bike } from "./bai20";
import { Repository } from "./bai21";
import { Stack } from "./bai22";
import { CashPayment, CardPayment } from "./bai23";
import { Fan, AirConditioner } from "./bai24";
import { Shape as Shape25 } from "./bai25";
import { Order } from "./bai26";
import { Teacher } from "./bai27";
import { Animal as Animal28, Dog as Dog28, Cat as Cat28 } from "./bai28";
import { Car as Car29, Robot } from "./bai29";
import { School } from "./bai30";

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
    new Product("Webcam", 150),
];

const expensiveProducts = products.filter((product) => product.price > 100);
console.log("\n===================== Bai 08 =====================");
console.log("Products with price > 100:");
expensiveProducts.forEach((product) => product.displayInfo());

// bai 09
const dog = new Dog("Husky");
const cat = new Cat("Tom");

console.log("\n===================== Bai 09 =====================");
dog.sound();
cat.sound();

// bai 10
const acc = new Account("123-456", "Nguyen Tan Nghi", 1000);
console.log("\n===================== Bai 10 =====================");
console.log(`Account Number: ${acc.accountNumber}`);
console.log(`Owner: ${acc.owner}`);
console.log(`Initial Balance: $${acc.getBalance()}`);

acc.deposit(500);
acc.withdraw(300);
acc.withdraw(2000);

// bai 11
const dog11 = new Dog11("Husky");
const cat11 = new Cat11("Tom");

console.log("\n===================== Bai 11 =====================");
dog11.move();
dog11.bark();

cat11.move();
cat11.meow();

// bai 12
const bird = new Bird("Eagle");
const fish = new Fish("Salmon");

console.log("\n===================== Bai 12 =====================");
bird.fly();
fish.swim();

// ===================== Bai 13 =====================
const square = new Square(4);
const circle = new Circle(3);
console.log("\n===================== Bai 13 =====================");
console.log(`Square area: ${square.area()}`);
console.log(`Circle area: ${circle.area()}`);

// ===================== Bai 14 =====================
const manager = new Manager("Alice");
const dev = new Developer("Bob");
console.log("\n===================== Bai 14 =====================");
manager.work();
manager.manage();
dev.work();
dev.code();

// ===================== Bai 15 =====================
const library = new Library();
const book1 = new Book("TS Handbook", "Anders", 2020);
const user1 = new User("Nghi");
console.log("\n===================== Bai 15 =====================");
library.addBook(book1);
library.addUser(user1);
library.listBooks();

// ===================== Bai 16 =====================
const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Hello");
console.log("\n===================== Bai 16 =====================");
console.log(numberBox.getValue());
console.log(stringBox.getValue());

// ===================== Bai 17 =====================
const logger = Logger.getInstance();
console.log("\n===================== Bai 17 =====================");
logger.log("This is a singleton logger!");

// ===================== Bai 18 =====================
console.log("\n===================== Bai 18 =====================");
console.log(`Add: ${MathUtil.add(5, 3)}`);
console.log(`Subtract: ${MathUtil.subtract(5, 3)}`);
console.log(`Multiply: ${MathUtil.multiply(5, 3)}`);
console.log(`Divide: ${MathUtil.divide(10, 2)}`);

// ===================== Bai 19 =====================
const animals19: Animal19[] = [new Dog19(), new Cat19()];
console.log("\n===================== Bai 19 =====================");
animals19.forEach((a) => a.makeSound());

// ===================== Bai 20 =====================
const car20 = new Car20();
const bike = new Bike();
console.log("\n===================== Bai 20 =====================");
car20.move();
bike.move();

// ===================== Bai 21 =====================
const repo = new Repository<string>();
repo.add("Item 1");
repo.add("Item 2");
console.log("\n===================== Bai 21 =====================");
console.log(repo.getAll());

// ===================== Bai 22 =====================
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log("\n===================== Bai 22 =====================");
console.log(`Peek: ${stack.peek()}`);
console.log(`Pop: ${stack.pop()}`);
console.log(`Is Empty: ${stack.isEmpty()}`);

// ===================== Bai 23 =====================
const cash = new CashPayment();
const card = new CardPayment();
console.log("\n===================== Bai 23 =====================");
cash.pay(100);
card.pay(200);

// ===================== Bai 24 =====================
const fan = new Fan();
const ac = new AirConditioner();
console.log("\n===================== Bai 24 =====================");
fan.turnOn();
ac.turnOn();

// ===================== Bai 25 =====================
console.log("\n===================== Bai 25 =====================");
Shape25.describe();

// ===================== Bai 26 =====================
const order = new Order();
order.addProduct(new Product("Pen", 5));
order.addProduct(new Product("Notebook", 15));
console.log("\n===================== Bai 26 =====================");
console.log(`Total price: $${order.getTotal()}`);

// ===================== Bai 27 =====================
const teacher = new Teacher("Mr. Smith", 40, "Math");
console.log("\n===================== Bai 27 =====================");
teacher.introduce();

// ===================== Bai 28 =====================
const dog28 = new Dog28();
const cat28 = new Cat28();
console.log("\n===================== Bai 28 =====================");
dog28["makeSound"](); // gọi protected override
cat28["makeSound"]();

// ===================== Bai 29 =====================
const car29 = new Car29();
const robot = new Robot();
console.log("\n===================== Bai 29 =====================");
car29.move();
robot.move();

// ===================== Bai 30 =====================
const school = new School();
const student1 = new Student("Alice", 20, "A");
const student2 = new Student("Bob", 21, "B");
school.addStudent(student1);
school.addStudent(student2);
school.addTeacher(new Teacher("Mrs. Rose", 35, "English"));
console.log("\n===================== Bai 30 =====================");
school.displayInfo();
