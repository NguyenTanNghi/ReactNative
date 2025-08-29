export class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log(`${this.name} is moving...`);
    }
}

export class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    bark(): void {
        console.log(`${this.name} says: Woof Woof!`);
    }
}

export class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    meow(): void {
        console.log(`${this.name} says: Meow Meow!`);
    }
}
