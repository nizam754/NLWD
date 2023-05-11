"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance() {
        console.log(`My Current Balance is ${this._balance}`);
    }
    addDeposit(amount) {
        this._balance = this._balance + amount;
    }
}
class StudentAccount extends BankAccount {
    test() {
        this.
        ;
    }
}
const myAccount = new BankAccount(444, "Persian", 20);
// myAccount.balance = 0;
console.log(myAccount);
