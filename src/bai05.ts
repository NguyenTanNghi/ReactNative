export class BankAccount {
    private balance: number;

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Deposit amount must be > 0.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount: number): void {
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

    getBalance(): number {
        return this.balance;
    }
}
