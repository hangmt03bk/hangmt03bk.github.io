//----------------Exercise 1----------------------
String.prototype.filter = function(arr){
    let str = this;
    for(s of arr){
        str = str.replace(new RegExp(s, 'g'),'');
    }
    return str;
};

//console.log("This house is not nice!".filter(['not', 'is']));

//----------------Exercise 2----------------------
Array.prototype.BubbleSort = function(){
    var n = this.length, arr = this;
    var i,j;
    for(i = 0; i < n; i++){
        for(j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}
//console.log([6,4,0,3,-2,1].BubbleSort());

//----------------Exercise 3----------------------
var Person = function() {};
Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject){
    console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function(){};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject){
    console.log(this.name + " is now teaching " + subject);
    return this.name + " is now teaching " + subject;
}
var him = new Teacher();

him.initialize("Hang", 45);
//him.teach("Inheritance");

//----------------------------------------------------------------
function verify(){
    
    describe("filter", function(){
        it("returns the string after removing all the banned words.", function(){
            assert.equal("This house is not nice!".filter(['not']), "This house is  nice!");
        });
    });
    
    describe("BubbleSort", function(){
        it("simple sorting algorithm", function(){
            assert.equal([6,4,0,3,-2,1].BubbleSort().toString(), [-2,0,1,3,4,6].toString());
        });
    });
    
    describe("teach", function(){
        it("[teacher's name] is now teaching [subject]", function(){
            assert.equal(him.teach("Inheritance"), "Hang is now teaching Inheritance");
        });
    });

}