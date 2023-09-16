let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = input[0].split(" ").map(Number);

num.sort((a,b)=> a-b);

console.log(num.join(" "));