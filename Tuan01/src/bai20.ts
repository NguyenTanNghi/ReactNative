export interface Vehicle {
    move(): void;
}

export class Car implements Vehicle {
    move(): void {
        console.log("Car is moving on the road.");
    }
}

export class Bike implements Vehicle {
    move(): void {
        console.log("Bike is moving on the street.");
    }
}
