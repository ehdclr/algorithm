let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let total = 0;
let flag = false;

while(n>0){
    if(n==0 || n % 5==0){
        total += parseInt(n/5);
        flag = true;
        break;
    }
    n -=3;
    total+=1;
}

if(!flag){
    console.log(-1);
}
else{
    console.log(total);
}
