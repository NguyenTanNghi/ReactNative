// bai27.ts
import { Person } from "./bai01";

export class Teacher extends Person {
    subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    introduce(): void {
        console.log(`I am ${this.name}, ${this.age} years old, and I teach ${this.subject}.`);
    }
}
