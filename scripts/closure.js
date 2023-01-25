//-------------quest 1---------------
console.log("-------------quest 1---------------");
var count = (function() {
    var counter = 0;
    function add(){ 
        counter++;
        console.log(counter);
    }
    function reset(){
        counter = 0;
        console.log(counter);
    }
    return{
        addFunc: add,
        resetFunc: reset,
    };
})();

count.addFunc();
count.addFunc();
count.resetFunc();
count.addFunc();

//-------------quest 2---------------
console.log("-------------quest 2---------------");
console.log("Free variable in quest 1 is 'counter'.");
console.log("Free variables are variables reffered by a function and not it's parameters and local variables.");

//-------------quest 3---------------
console.log("-------------quest 3---------------");
var make_adder = function(inc){
    var counter = inc;
    var value = 0;
    return function(){
        value += counter;
        return value;
    };
}
var add5 = make_adder(5);
add5(); add5();
console.log(add5()); 

var add7 = make_adder(7);
add7(); add7();
console.log(add7()); 
//-------------quest 4---------------
console.log("-------------quest 4---------------");
console.log("Suppose you are given a file of JavaScript code containing a list of many function and variable \
declarations. All of these function and variable names will be added to the Global JavaScript \
namespace. What simple modification to the JavaScript file can remove all the names from the \
Global namespace?");
console.log("---> using immediately invoke function expression(IIFE), put all inside a funtion and assign to a variable");

//-------------quest 5---------------
console.log("-------------quest 5---------------");
var employee = function(){
    var name;
    var age;
    var salary;
    function getName(){return name;}
    function getAge() {return age;}
    function getSalary() {return salary;}
    
    function setName(_name) { name = _name;}
    function setAge(_age) { age = _age;}
    function setSalary(_salary) {salary = _salary}
    function increaseSalary(percentage){
        setSalary(getSalary()*(1+percentage/100.0)); 
        console.log(getSalary());      
    }
    function increaseAge(){
        setAge(getAge()+1);
        console.log(getAge());
    }
    return{
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        increaseAge: increaseAge
    }
}();

employee.setName('hang');
employee.setAge(38);
employee.setSalary(200000);
employee.increaseSalary(10);
employee.increaseAge();

//-------------quest 5---------------
console.log("-------------quest 6---------------");
employee.address = "";
employee.getAddress = function(){return this.address};
employee.setAddress = function(address){ this.address = address;};

employee.setAddress("805 w kirkwood");
console.log(employee.getAddress());