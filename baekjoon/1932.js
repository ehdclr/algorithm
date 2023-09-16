const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let dp = [];

for (let i = 1; i <= n; i++) {
  let data = input[i].split(" ").map(Number);
  dp.push(data);
}

//맨처음은 추가하고 이게 각 현재 위치의 삼각형에서 추가한

for (let i = 1; i < n; i++) {
  /**
   * [0]
   * [0,1]
   * [0,1,2]
   * 이런식으로 내려오니 까 j 는 i를 넘어가면안됨 인덱스니까
   */
  for (let j = 0; j <= i; j++) {
    let upLeft = 0; //이전 값보다 오른쪽에 있는 값일 경우 두가지 중 하나 고르기
    if (j != 0) downLeft = dp[i - 1][j - 1];

    let up = 0; //바로 위에서 내려올 경우
    if (j != i) up = dp[i - 1][j];

    //해당 위치까지 내려왔을 때 최댓값 [24,30,27,26,24] 가되니까 이 중 제일 큰값
    //현재 위치에서 이전 값들을 더하는 것이니까 (이전 줄에서도 보면 최댓값들을 가져온 것 )
    dp[i][j] = dp[i][j] + Math.max(upLeft, up);
  }
}

console.log(Math.max(...dp[n - 1]));
