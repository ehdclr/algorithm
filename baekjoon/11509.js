let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let height = input[1].split(" ").map(Number);

let result = 0;
let arrow = new Array(1000001).fill(0);
for(let x of height){
    if(arrow[x] >0){
        arrow[x] -=1;
        arrow[x-1] += 1;
    }
    else{
        arrow[x-1] +=1;
        result +=1;
    }
}

console.log(result);