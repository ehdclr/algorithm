let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let sick = input[0].split("-");

let total = 0;

for(let i =0 ; i <sick.length;i++){
    let cur= sick[i].split("+").map(Number).reduce((a,b)=>a+b);

    if(i ==0){
        total += cur;
    }
    else total -=cur;
}

console.log(total);