const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let house = []; //집 좌표를 담을 배열
let chicken = []; // 치킨집 좌표를 담을 배열

//조건이 5개의 치킨집이 있다면, 3개를 고르는 것이니 조합을 써야함 -> 백트래킹 사용
for (let i = 1; i <= n; i++) {
  let row = input[i].split(" ").map(Number);
  for (let j = 0; j < n; j++) {
    if (row[j] == 1) house.push([i - 1, j]);
    if (row[j] == 2) chicken.push([i - 1, j]);
  }
}

//치킨집을 조합으로 고르는 것이니 방문 배열만들기
let visited = new Array(chicken.length).fill(false);
//치킨 집을 고른 결과의 인덱스를 담기 위해 배열 만들기
let selected = [];
let answer = 1e9;
//조합을 위한 백트래킹 만들기
function dfs(depth, start) {
  if (depth == m) {
    let result = []; //치킨집을 고른 결과
    for (let i of selected) result.push(chicken[i]);
    //이미 이곳에서는 치킨집을 m개만큼 고른 상태
    let sum = 0; //집에서부터 치킨집 까지의 거리를 담을 것 가장 짧은 치킨 거리를 구해야함
    for (let [hx, hy] of house) {
      let temp = 1e9; // 집거리에서 치킨집 거리를 최솟 값을 구해야함 그래서 임시 값 두기
      for (let [cx, cy] of result) {
        temp = Math.min(temp, Math.abs(cx - hx) + Math.abs(cy - hy));
      }

      //각 집에서 최솟값을 다 더하는 것이니
      sum += temp;
    }
    answer = Math.min(answer, sum);
    return;
  }

  for (let i = start; i < chicken.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1, i + 1);
    visited[i] = false;
    selected.pop();
  }
}

dfs(0, 0);
console.log(answer);
