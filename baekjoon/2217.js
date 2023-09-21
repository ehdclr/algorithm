const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

let line = [];

let maxweight = 0;

for (let i = 1; i <= n; i++) {
  line.push(Number(input[i]));
}

let result = [];
//가장 큰거부터 포함하고 무게는 더 적은 것을 기준으로 해야함
//계속 max를 추출해야함 
line
  .sort((a, b) => b - a)
  .map((el) => {
    result.push(el);
    maxweight = Math.max(
      maxweight,
      result.length * result.reduce((a, b) => Math.min(a, b))
    );
  });


console.log(maxweight);
