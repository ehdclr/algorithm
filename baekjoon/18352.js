let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

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

//최단거리가 k인 도시 -> 최단거리는 bfs가 유리함
// X도시로부터 출발
//N은 노드
//m은 간선의 갯수 (방향 그래프임)
let [n, m, k, x] = input[0].split(" ").map(Number);

let graph = [];
//간선 리스트로 나타내는게 좋음
for (let i = 1; i <= n; i++){
    graph[i] = [];
}
for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}


let visited = new Array(n + 1).fill(-1); //누적 거리


visited[x] = 0;
let queue = new Queue();
queue.enqueue(x);

while (queue.getLength() != 0) {
  let cur = queue.dequeue();

  for (let nxt of graph[cur]) {
    if (visited[nxt] == -1) {
      visited[nxt] = visited[cur] + 1;
      queue.enqueue(nxt);
    }
  }
}

let check = false;
for(let i = 1; i <=n;i++){
    if(visited[i]==k){
        console.log(i);
        check=true;
    }
}
if(!check) console.log(-1);