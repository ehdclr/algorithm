const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const MAX = 100001;
let [n, k] = input[0].split(" ").map(Number);

let visited = new Array(MAX).fill(0);

function bfs() {
  let queue = new Queue();
  queue.enqueue(n);

  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    console.log(cur,"현재")
    if (cur == k) return visited[cur];

    for (let nxt of [cur - 1, cur + 1, cur * 2]) {
      if (nxt < 0 || nxt >= MAX) continue;
      if (visited[nxt] == 0) {
        visited[nxt] = visited[cur] + 1;
        queue.enqueue(nxt);
      }
    }
  }
}

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

console.log(bfs());
