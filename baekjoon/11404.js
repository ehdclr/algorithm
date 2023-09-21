const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const INF = 1e9; // 무한대 값

const n = Number(input[0]); // 도시의 갯수 (노드의 갯수)
const m = Number(input[1]); // 버스의 갯수 -> 이동하는 것

let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(INF));

//그래프에 해당하는 값을 넣어줘야함
for (let i = 0; i < m; i++) {
  //a 출발 노드 b 목표 노드 c 거리
  let [a, b, c] = input[i + 2].split(" ").map(Number);
  graph[a][b] = Math.min(graph[a][b],c); 
  //문제의 두 도시를 연결하는 간선은 하나가 아닐 수도 있다고 함
}
//k 는 중간에 들리는 노드 ->

for (let k = 1; k < n + 1; k++) {
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
        if(i==j) graph[i][j] =0;
      let cost = graph[i][k] + graph[k][j];
      graph[i][j] = Math.min(graph[i][j], cost);
    }
  }
}

for (let i = 1; i < n + 1; i++) {
  let line = "";
  for (let j = 1; j < n + 1; j++) {
    if (graph[i][j] == INF) line += "0 ";
    else line += graph[i][j] + " ";
  }
  console.log(line);
}
