"use strict";

class SavingsAccount extends Account{
  constructor(number,interest){
    super(number);
    this.interest = interest;
  }

  get interest(){
    return this._interest;
  }

  set interest(value){
    this._interest = value; 
  }

  addInterest(){
    return this.deposit(this._balance*this._interest/100);
  }

  toString(){
    return super.toString() + "   interest " + this._interest;
  }

  endOfMonth(){
    let value = this.addInterest();
    return "Interest added SavingsAccount " + this._number + 
    ": balance: " + this._balance + " interest: " + this.interest;
  }
}