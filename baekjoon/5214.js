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

let [n, k, m] = input[0].split(" ").map(Number);

let graph = [];
for (let i = 0; i <= n+m; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
    let line = input[i].split(" ").map(Number);
  for(let x of line){
    graph[x].push(n+i); //노드 -> 하이퍼 튜브
    graph[n+i].push(x);
  }
}

let visited = new Set([1]); //1번 노드에서 출발

let queue = new Queue();
queue.enqueue([1,1]); //[거리 노드 번호]
let found = false;

while (queue.getLength() != 0) {
  let [dist,now] = queue.dequeue();
  console.log(now)
  if (now == n){
    console.log(parseInt(dist/2)+1); //절반은 하이퍼 튜브
    found = true;
    break;
  }

  for (let y of graph[now]) {
    if (!visited.has(y)) {
      visited.add(y);
      queue.enqueue([dist+1,y]);
    }
  }
}

if(!found) console.log(-1);