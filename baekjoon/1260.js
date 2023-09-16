const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

class Queue {
  constructor() {
    this.queue = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(value) {
    this.queue[this.tailIndex] = value;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.queue[this.headIndex];
    delete this.queue[this.headIndex];
    this.headIndex++;
    return item;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }

  peek() {
    return this.queue[this.headIndex];
  }
}

//정점의 개수 n 간선의 갯수 m 탐색을 시작할 정점 번호 v
//무방향 그래프
let [n, m, v] = input[0].split(" ").map(Number);
//무방향 그래프는 연결 된 부분은 링크드 리스트로 구현하는 것이 쉬움
let graph = [];
//노드의 갯수 대로 빈칸 추가
for (let i = 0; i <= n; i++) graph.push([]);
//간선을
for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

//간선을 적은 번호부터 해야하니까 정렬 
for(let i =1 ; i<=n ;i++){
    graph[i].sort((a,b)=>a-b);
}


//최종 답
let answer = "";
//방문한 노드는 이미 없애야하니까 visited를 두개를 만들어?
//-> 비효율적인데
//일단 해보고

const visited1 = new Array(n + 1).fill(false); //dfs
const visited2 = new Array(n + 1).fill(false); //bfs용

//방문한 노드
function dfs(x) {
  visited1[x] = true;
  answer += x + " ";

  for (let y of graph[x]) {
    if (!visited1[y]) {
      //방문하지 않았다면
      
      dfs(y);
    }
  }
}

function bfs(x) {
  let queue = new Queue();
  queue.enqueue(x); //현재 방문한 노드
  visited2[x] = true;

  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    answer += cur + " ";

    for (let nxt of graph[cur]) {
      if (!visited2[nxt]) {
        visited2[nxt] = true;
        queue.enqueue(nxt);
      }
    }
  }
}

dfs(v);
answer += "\n";
bfs(v);

console.log(answer);
