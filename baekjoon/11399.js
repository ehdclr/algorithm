let fs= require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let tc = Number(input[0]);

let arr = input[1].split(" ").map(Number);

//! 1 2 3 3 4
//! 1 3 6 9 13 

arr.sort((a,b)=>a-b);

let cur = 0;
let answer = 0;

for(let i = 0 ; i<tc;i++){
    cur += arr[i]; //1 3 
    answer += cur; // 1 4
}

console.log(answer);