const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [r, c] = input[0].split(" ").map(Number);

let graph = [];
for (let i = 1; i <= r; i++) graph.push(input[i]);

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let visited = new Set(); // 이미 방문한 곳은 못 방문함
visited.add(graph[0][0]);
let maxDepth = 0;

function dfs(depth, x, y) {
  maxDepth = Math.max(maxDepth, depth);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
    if (visited.has(graph[nx][ny])) continue;
    visited.add(graph[nx][ny]);
    dfs(depth + 1, nx, ny);
    visited.delete(graph[nx][ny]);
  }
}

dfs(1, 0, 0);

//maxDepth를 해야하는 이유가, visited는 어쨌든 백트래킹을 끝내면 visited.add(grpah[0][0]) 한 초기 값만 남게됨 넣었다 뺐기 때문에 
console.log(maxDepth);
