let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testcases = Number(input[0]);

let line = 1;
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

while (testcases--) {
  let [v, e] = input[line].split(" ").map(Number);
  graph = [];
  for (let i = 0; i <= v; i++) {
    graph.push([]);
  }

  for (let i = 1; i <= e; i++) {
    let [a, b] = input[line + i].split(" ").map(Number);
    graph[a].push([b]);
    graph[b].push([a]);
  }

  visited = new Array(v + 1).fill(-1);

    for(let i = 1; i <=v;i++){
      if(visited[i] == -1) bfs(i,graph,visited);
    }
  

  line += e + 1;
  if (isBipartite(graph, visited)) console.log("YES");
  else console.log("NO");
}

function bfs(x, graph, visited) {
  let queue = new Queue();
  queue.enqueue(x);
  visited[x] = 0; //처음 노드는 빨간색
  while (queue.getLength() != 0) {
    cur = queue.dequeue();
    for (let nxt of graph[cur]) {
      if (visited[nxt] == -1) {
        visited[nxt] = (visited[cur] + 1) % 2;
        queue.enqueue(nxt);
      }
    }
  }
}

function isBipartite(graph, visited) {
  for (let x = 1; x < visited.length; x++) {
    for (let y of graph[x]) if (visited[x] == visited[y]) return false;
  }
  return true;
}

//사이클로 생각하면안되네

//이어지면 반대 쪽으로 보내고
