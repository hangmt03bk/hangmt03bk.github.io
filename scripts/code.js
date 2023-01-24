function sum(arr){
    return arr.reduce((n1,n2) => n1 + n2);
}
function multiply(arr){
    return arr.reduce((n1,n2) => n1*n2);
}
function reverse(str){
    return str.split("").reduce((acc,c) => c + acc,"");
}
function  filterLongWords(array, len){
    return array.filter(s => s.length > len);
}