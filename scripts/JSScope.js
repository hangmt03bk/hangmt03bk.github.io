//---------question 1--------------
console.log("---------question 1--------------");
x = 1;
var b = 5;
var a = 10;
var c = function (a, b, c) {
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
  var x = 10;
};
c(8, 9, 10);
console.log(b);
console.log(x);

//------------ question 2------------
console.log("---------question 2--------------");
console.log("Global Scope: global environment for functions, var,...");
console.log("Local Scope: or function scope is the scope inside functions.");

//------------ question 3------------
console.log("---------question 3--------------");

console.log("//scope A");
console.log("function xFunc(){");
console.log("   //Scope B");
console.log("    function yFunc(){");
console.log("        //Scope C");
console.log("    }");
console.log("}");

console.log("a. Do statements in Scope A have access to variables defined in Scope B and C? -> No");
console.log("b. Do statements in Scope B have access to variables defined in Scope A? -> Yes");
console.log("c. Do statements in Scope B have access to variables defined in Scope C? -> No");
console.log("d. Do statements in Scope C have access to variables defined in Scope A? -> Yes");
console.log("e. Do statements in Scope C have access to variables defined in Scope B? -> Yes");

//------------ question 4------------
console.log("---------question 4--------------");
var x = 9;
function myFunction() {
  return x * x;
}
console.log(myFunction());
x = 5;
console.log(myFunction());

//------------ question 5------------
console.log("---------question 5--------------");
var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}
bar();
