class BankAccount1 {
    public readonly id: number;
    public name: string;
    private _balance: number;
  
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
     
    private getTestBalance(): number{
       return this._balance
    }
    
    get Test():number{
      return this.getTestBalance()
    }
    //getter
    get balance(): number {
      return this._balance;
    }
    // getBalance(): number {
    //   return this._balance;
    // }
  
    //setter
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
  }
  
  class StudentAccount1 extends BankAccount1 {
    test() {
       this.
    }
  }
  
  const myAccount1 = new BankAccount1(444, "Persian", 30);
  // myAccount1.addDeposit(20);
  // myAccount1.getBalance();
  // myAccount1.getBalance();
  console.log(myAccount1.balance);
  myAccount1.deposit = 30;
  console.log(myAccount1.balance);