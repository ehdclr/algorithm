const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let arr = [];
for (let i = 1; i <= n; i++) {
  let line = input[i].split("");
  arr.push(line);
}


function dfs(x, y) {
  if (!visited[x][y]) {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (arr[x][y] == arr[nx][ny]) dfs(nx, ny);
    }
    return true;
  }
  return false;
}

let visited = [];
for (let i = 0; i < n; i++) {
  visited.push(new Array(n).fill(false));
}



let result1 = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result1++;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] == "R") arr[i][j] = "G";
  }
}

let result2 = 0;
visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result2++;
  }
}

console.log(result1 + " " + result2);

//r g b 방문 했다고 생각해야함

//적록 색약 아닌사람의 갯수 , 적록색약인 사람의 갯수 결과
// 적록색약인 경우 -> 빨강과 초록은 같이 묶여서 보임
