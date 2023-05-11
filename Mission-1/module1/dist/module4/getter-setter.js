"use strict";
class BankAccount1 {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getTestBalance() {
        return this._balance;
    }
    get Test() {
        return this.getTestBalance();
    }
    //getter
    get balance() {
        return this._balance;
    }
    // getBalance(): number {
    //   return this._balance;
    // }
    //setter
    set deposit(amount) {
        this._balance = this.balance + amount;
    }
}
class StudentAccount1 extends BankAccount1 {
    test() {
        this.
        ;
    }
}
const myAccount1 = new BankAccount1(444, "Persian", 30);
// myAccount1.addDeposit(20);
// myAccount1.getBalance();
// myAccount1.getBalance();
console.log(myAccount1.balance);
myAccount1.deposit = 30;
console.log(myAccount1.balance);
