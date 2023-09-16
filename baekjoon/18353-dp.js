const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr.reverse();

dp = new Array(n).fill(1);

//그냥 증가만 하는 인덱스만 뽑으면되니까 
for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}


console.log(n- Math.max(...dp));