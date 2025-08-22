"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be > 0.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be > 0.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
    }
    getBalance() {
        return this.balance;
    }
}
exports.BankAccount = BankAccount;
