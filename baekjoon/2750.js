let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let arr = [];
for(let tc = 1; tc<=testCase;tc++){
    arr.push(Number(input[tc]))
}

arr.sort((a,b)=>a-b);

let answer=""
for(let i = 0 ; i<arr.length ;i++){
    answer+= arr[i]+"\n";
}

console.log(answer);