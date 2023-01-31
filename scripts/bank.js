"use strict";

class Bank{
  static nextNumber = 1;
 constructor(){
  this.accounts = [];
 }
 
 addAccount(){
  let acc = new Account(Bank.nextNumber);
  this.accounts.push(acc);
  Bank.nextNumber++;
  return acc._number;
 }

 addSavingsAccount(interest){
  let acc = new SavingsAccount(Bank.nextNumber,interest);
  this.accounts.push(acc);
  Bank.nextNumber++;
  return acc._number;
 }

 addCheckingAccount(overdraft){
  let acc = new CheckingAccount(Bank.nextNumber,overdraft);
  this.accounts.push(acc);
  Bank.nextNumber++;
  return acc._number;
 }
 closeAccount(number){
  this.accounts = this.accounts.filter( acc => acc._number != number);
 }

 accountReport(){
  return this.accounts.reduce((str,acc) => str += acc.toString() + "\n",'');
 }

 endOfMonth(){
  let str = "";
  this.accounts.forEach(acc => str += acc.endOfMonth() + "\n");
  return str;
 }
}