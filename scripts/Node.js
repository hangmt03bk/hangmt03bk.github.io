const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

let arr = [];
function getNumber(){
    readline.question('Enter a number: ', num => {
        if(num == 'stop'){
            let sum = arr.reduce((acc,n) => acc+n,0);
            console.log(sum);
            readline.close();
        }else{
            arr.push(parseInt(num));
            getNumber();
        }
        
    })
}

getNumber();