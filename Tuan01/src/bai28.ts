// bai28.ts
export class Animal {
    protected makeSound(): void {
        console.log("Some generic sound...");
    }
}

export class Dog extends Animal {
    override makeSound(): void {
        console.log("Woof Woof!");
    }
}

export class Cat extends Animal {
    override makeSound(): void {
        console.log("Meow Meow!");
    }
}
