const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//testCases
let t = Number(input[0]);
let line = 1;

//방향 그래프의 순환 찾기임

// 4 -> 7 -> 6

while (t--) {
  let n = Number(input[line]);
  let graph = [0, ...input[line + 1].split(" ").map(Number)];

  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  //dfs는 스택의 일종이기 때문에, 빠져 나오는 것을 finished에 방문 여부를 하고
  let result = []; //  먼저 나온것들을 담아주는 배열을 선언
  //순환인것들을 담아주는 것

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i, graph, visited, result);
    }
  }

  line += 2;
  //
  console.log(n - result.length);
}

function dfs(x, graph, visited, finished, result) {
  visited[x] = true; //현재 방문한 것을 방문 처리
  let nxt = graph[x];
  if (!visited[nxt]) {
    dfs(y, graph, visited, finished, result);
  }

  //나가는건  top 부터 순서대로 나가기 때문에 이렇게 queue 로직과 비슷함
  //방문을 했지만, 스택에서 빠져나가지 않았다면,
  else if (!finished[nxt]) {
    //여기는 단순히 사이클이 포함된 노드들을 저장하는 로직임
    while (nxt != x) {
      result.push(nxt);
      nxt = graph[nxt];
    }
    result.push(x);
  }
  //방문을 했고, finished에 
  //현재 노드에 대한 처리를 하는 것이니까 
  finished[x] = true;
}
