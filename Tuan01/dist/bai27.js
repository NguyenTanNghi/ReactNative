"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
// bai27.ts
const bai01_1 = require("./bai01");
class Teacher extends bai01_1.Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`I am ${this.name}, ${this.age} years old, and I teach ${this.subject}.`);
    }
}
exports.Teacher = Teacher;
