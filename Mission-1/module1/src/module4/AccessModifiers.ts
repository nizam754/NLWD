class BankAccount {
    public id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance(){
        console.log(`My Current Balance is ${this._balance}`)
    }
    addDeposit(amount: number) {
        this._balance = this._balance + amount;
    }
}

class StudentAccount extends BankAccount {
    test(){
        this.
    }
}

const myAccount = new BankAccount(444, "Persian", 20);
// myAccount.balance = 0;
console.log(myAccount);