class CheckingAccount extends Account{
  constructor(number, overdraft){
    super(number);
    this.overdraft = overdraft;
  }
  get overdraft(){
    return this._overdraft; 
  }
  set overdraft(value){
    this._overdraft = value;
  }

  withdraw(amount){
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if(this._balance - amount + this._overdraft < 0 ){
      throw Error("Insufficient funds");
    }

    this._balance -= amount;
  }

  toString(){
    return super.toString() + "   overdraft " + this._overdraft;
  }

  endOfMonth(){
    let str = '';
    if(this._balance < 0){
      str += "Warning, low balance ";
    }
    str += "CheckingAccount " + this._number + 
    " balance: " + this._balance + " overdraft limit: " + this.overdraft;
    return str;
  }
}