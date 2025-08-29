"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName.trim().length === 0) {
            console.log("Name cannot be empty.");
            return;
        }
        this._name = newName;
    }
    displayInfo() {
        console.log(`User name: ${this.name}`);
    }
}
exports.User = User;
