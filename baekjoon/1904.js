const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

//00붙여진 타일
//1 낱개
let d = new Array(100001).fill(0);
d[0] = 0;
d[1] = 1;
d[2] = 2;

for (let i = 3; i <= n; i++) {
  d[i] = (d[i - 1] + d[i - 2]) % 15746;
}

console.log(d[n]);
