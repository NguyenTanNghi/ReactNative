export class Employee {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    work(): void {
        console.log(`${this.name} is working...`);
    }
}

export class Manager extends Employee {
    manage(): void {
        console.log(`${this.name} is managing the team.`);
    }
}

export class Developer extends Employee {
    code(): void {
        console.log(`${this.name} is writing code.`);
    }
}
