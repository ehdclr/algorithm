const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let t = Number(input[0]);
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

  peek() {
    return this.queue[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

function bfs(start, end, cnt, i, graph) {
  let queue = new Queue();
  queue.enqueue(start);

  while (queue.getLength() != 0) {
    let [x, y] = queue.dequeue();
    if (x == end[0] && y == end[1]) return graph[x][y]

    for (let [nxtX, nxtY] of [
      [x + 1, y + 2],
      [x + 1, y - 2],
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x - 1, y - 2],
      [x - 1, y + 2],
      [x - 2, y - 1],
      [x - 2, y + 1],
    ]) {
      if (nxtX < 0 || nxtX >= i || nxtY < 0 || nxtY >= i) continue;
      if (graph[nxtX][nxtY] == 0) {
        queue.enqueue([nxtX, nxtY]);
        graph[nxtX][nxtY] = graph[x][y]+1;
      }
    }
  }
}

while (t--) {
  let i = Number(input[line]);

  let start = input[line + 1].split(" ").map(Number);
  let end = input[line + 2].split(" ").map(Number);
  let graph = [];

  for (let x = 0; x < i; x++) {
    graph.push(new Array(i).fill(0));
  }

  console.log(bfs(start, end, 0, i, graph));

  line += 3;
}
