export class User {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public set name(newName: string) {
        if (newName.trim().length === 0) {
            console.log("Name cannot be empty.");
            return;
        }
        this._name = newName;
    }

    public displayInfo(): void {
        console.log(`User name: ${this.name}`);
    }
}
