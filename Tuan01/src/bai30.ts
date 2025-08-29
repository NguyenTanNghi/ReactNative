// bai30.ts
import { Student } from "./bai02";
import { Teacher } from "./bai27";

export class School {
    private students: Student[] = [];
    private teachers: Teacher[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
        console.log("School Info:");
        console.log("Students:");
        this.students.forEach(s => s.displayInfoAll());
        console.log("Teachers:");
        this.teachers.forEach(t => t.introduce());
    }
}
