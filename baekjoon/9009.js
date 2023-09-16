let fs =require("fs");
let input =fs.readFileSync("/dev/stdin").toString().split("\n")

function fibonacci(num){
    if(num ===0){
        return 0;
    }
    if(num ===1){
        return 1;
    }

    return fibonacci(num-1)+ fibonacci(num-2);
}

let t= Number(input[0]);
let list = [];
for (let i = 1; i <=t; i++){
    list.push(Number(input[i]));
}