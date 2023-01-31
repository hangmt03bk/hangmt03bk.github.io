
let account = new Account(999990);

describe("account",function(){
    it("account number", function(){
        assert.equal(account.getNumber(),999990);
    })

    it("account balance", function(){
        assert.equal(account.getBalance(),0.0);
    })

    it("account info", function(){
        assert.equal(account.toString(),"Account 999990: balance 0");
    })
});


describe("account deposit",function(){
    before('deposit 100000', function(){
        account.deposit(100000);
    } );
    it("deposit 100000", function(){
        assert.equal(account.getBalance(),100000);
    })  
});

describe("account withdraw",function(){
    before('deposit 100000', function(){
        account.withdraw(1000);
    } );
    it("withdraw 1000", function(){
        assert.equal(account.getBalance(),99000);
    })
});
//----------------------------------------------------
let savings = new SavingsAccount(999991,10);
describe("savingsaccount",function(){
    it("savingsaccount interest 10", function(){
        assert.equal(savings.interest,10);
    })
    it("savingsaccount info", function(){
        assert.equal(savings.toString(),"Account 999991: balance 0   interest 10");
    })
});
describe("savingsaccount add interest",function(){
    before('deposit and addInterest', function(){
        savings.deposit(100000);
        savings.addInterest();
    } );
    it("deposit 100000 and addInterest", function(){
        assert.equal(savings.getBalance(),110000);
    })  
});
//----------------------------------------------------
let checking = new CheckingAccount(999992, 5000);
describe("checkingaccount",function(){
    it("checkingaccount overdraft 5000", function(){
        assert.equal(checking.overdraft,5000);
    })
    it("checkingaccount info", function(){
        assert.equal(checking.toString(),"Account 999992: balance 0   overdraft 5000");
    })
});

describe("checkingaccount withdraw",function(){
    before('withdraw 6000', function(){
        checking.deposit(100000);
        checking.withdraw(6000);
    } );
    it("withdraw 6000", function(){
        assert.equal(checking.getBalance(),94000);
    })
});

//----------------------------------------------------
let bank = new Bank();
describe("Bank", function(){
    it("add a new account", function(){
        assert.equal(bank.addAccount(),1)
    })
    it("add a new saving account with interest 10%", function(){
        assert.equal(bank.addSavingsAccount(10),2)
    })
    it("add a new checking account with overdraft 5000", function(){
        assert.equal(bank.addCheckingAccount(5000),3)
    })
    it("account report", function(){
        assert.equal(bank.accountReport(), 
        "Account 1: balance 0\nAccount 2: balance 0   interest 10\nAccount 3: balance 0   overdraft 5000\n")
    })
})


describe("Bank end of month", function(){
    before("deposit 10000",function(){
        bank.accounts.forEach(acc => {
            acc.deposit(10000);
            if(acc._number == 3)
                acc.withdraw(12000);
        });
        
    })

    it("end of month", function(){
        assert.equal(bank.endOfMonth(),
        '\nInterest added SavingsAccount 2: balance: 11000 interest: 10\nWarning, low balance CheckingAccount 3 balance: -2000 overdraft limit: 5000\n');
    })
})

describe("Bank close", function(){
    before("close account 2",function(){
        bank.closeAccount(2);
    })
    it("close account 2", function(){
        assert.equal(bank.accountReport(),
        "Account 1: balance 10000\nAccount 3: balance -2000   overdraft 5000\n")
    })
})

