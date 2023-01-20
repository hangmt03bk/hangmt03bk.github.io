//1. max()
function max(x,y){
    if(x > y) return x;
    else return y;
}

//2.
function maxOfThree(x,y,z){
    return max(max(x,y),z);
}

//3. 
function isVowel(c){
    if(c.length != 1)   return false;
    var vowels=['a','o','i','e','u'];
    for(var vowel of vowels){
        if(vowel == c)  return true;
    }
    return false;
}

//4.
function sum(arr){
    var s = arr.reduce((n1,n2) => n1 + n2);
    return s;
}
function multiply(arr){
    var m = arr.reduce((n1,n2) => n1*n2);
    return m;
}

//5.
function reverse(str){
    var splitStr = str.split("");
    splitStr.reverse();
    var revStr= splitStr.join("");
    return revStr;
}

//6.
function  findLongestWord(array){
    var longest = array.reduce((s1,s2) => s1.length>s2.length?s1:s2);
    return longest;
}

//7.
function  filterLongWords(array, len){
    var long = array.filter(s => s.length > len);
    return long;
}
//8.
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem*10;
})

const c = a.filter(function(elem, i, array){
  return elem == 3;});

const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue*elem;
});

///////////////////////////////////////////////
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }

console.log("1.Expected output of max(54,81) is 81  " + myFunctionTest(81, max(54,81)));
console.log("2.Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("3.Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
console.log("3.Expected output of isVowel('ab') is false  " + myFunctionTest(false, isVowel('ab')));
console.log("3.Expected output of isVowel('g') is false  " + myFunctionTest(false, isVowel('g')));
console.log("4.Expected output of sum([1,2,3,4,5]) is 15  " + myFunctionTest(15, sum([1,2,3,4,5])));
console.log("4.Expected output of multiply([1,2,3,4,5]) is 120  " + myFunctionTest(120, multiply([1,2,3,4,5])));
console.log("5.Expected output of reverse('hangnguyen') is neyugngnah  " + myFunctionTest('neyugngnah', reverse('hangnguyen')));
console.log("6.Expected output of findLongestWord(['hangnguyen','tom','jerry','leo']) is hangnguyen  " + myFunctionTest('hangnguyen', findLongestWord(['hangnguyen','tom','jerry','leo'])));
console.log("7.Expected output of filterLongWords(['hangnguyen','tom','jerry','leo'],3) is ['hangnguyen','jerry']  " + myFunctionTest(['hangnguyen','jerry'].toString(), filterLongWords(['hangnguyen','tom','jerry','leo'],3).toString()));
console.log("8.a)Expected output of [1,3,5,3,3]*10 is [10,30,50,30,30]  " + myFunctionTest([10,30,50,30,30].toString(), b.toString()));
console.log("8.b)Expected output of [1,3,5,3,3]{==3} is [3,3,3]  " + myFunctionTest([3,3,3] .toString(), c.toString()));
console.log("8.c)Expected output of [1,3,5,3,3]{*} is 135  " + myFunctionTest(135, d));