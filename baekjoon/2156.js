const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let dp = new Array(10000).fill(0);

dp[0] = arr[0];
dp[1] = arr[0]+ arr[1]; //두번째 잔 마실때,
dp[2] = Math.max(arr[0] + arr[1],arr[0]+ arr[2], arr[1]+arr[2]); //3잔 마실때,


//다이나믹 프로그래밍은 애초에 dp를 넣을 때, 조건 제약사항만 지키고, 하나씩 늘려간단 생각으로 해야함 

for(let i = 3 ; i <n ;i++){
  dp[i] = dp[i-1]; //새로운 잔을 추가 했을 때, 추가 못할 수도 있으니까, 
  dp[i] = Math.max(dp[i],dp[i-2] +arr[i]) //새로운 잔 추가해서 마시기 새로운 잔 마셨을 때는, 그 이전잔은 안마신경우
  dp[i] = Math.max(dp[i],arr[i] + arr[i-1] + dp[i-3]) //새로운 잔 추가해서 마시는데 , 그 이전잔은 마신경우는 전전잔은 안마셔야함
}
console.log(dp[n-1]);