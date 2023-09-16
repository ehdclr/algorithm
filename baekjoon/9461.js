const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let t = Number(input[0]);

let dp = new Array(101).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;

for (let i = 6; i <= 100; i++) {
  dp[i] = dp[i - 1] + dp[i - 5];
}

for (let tc = 1; tc <= t; tc++) {
  let n = Number(input[tc]);
  console.log(dp[n]);
}
