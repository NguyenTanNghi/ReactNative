import { Person } from "./bai01";

export class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    displayInfoAll(): void {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
        );
    }
}
