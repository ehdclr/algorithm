const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//한 정점에서 다른 모든 정점에서의 거리니까 다익스트라 알고리즘을 사용해야함

//최단 경로니까 minHeap 을 사용
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return parseInt(2 * parentIndex + 1);
  }

  getrightChildIndex(parentIndex) {
    return parseInt(2 * parentIndex + 2);
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex][1] > this.heap[index][1]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  heapifyDown() {
    let index = 0;
    while (index < this.heap.length) {
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getrightChildIndex(index);

      if (leftChildIndex >= this.heap.length) {
        break;
      }

      let smallerChildIndex;
      if (rightChildIndex < this.heap.length) {
        smallerChildIndex =
          this.heap[leftChildIndex][1] <= this.heap[rightChildIndex][1]
            ? leftChildIndex
            : rightChildIndex;
      } else {
        smallerChildIndex = leftChildIndex;
      }

      if (this.heap[index][1] > this.heap[smallerChildIndex][1]) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }
  getLength() {
    return this.heap.length;
  }
}

const [v, e] = input[0].split(" ").map(Number);
const k = Number(input[1]);
const INF = 1e9;
const graph = Array.from(Array(v + 1), () => []);
const visited = Array(v + 1).fill(false);

for (let i = 0; i < e; i++) {
  const [a, b, e] = input[i + 2].split(" ").map(Number);
  graph[a].push([b, e]);
}

const distances = Array(v + 1).fill(INF);
distances[k] = 0;
const pq = new MinHeap();
pq.enqueue([k, 0]);

//어떻게 보면 큐랑 로직이 비슷하다 볼 수 있음 
// 다익스트라 알고리즘은 더 적은 방법으로 가는 것을 해야하기 때문에 이에 대한 처리를 해줘야함
while (pq.getLength() > 0) {
  const [curNode, curDist] = pq.dequeue();

  if (visited[curNode]) continue; // 방문 확인 추가
  visited[curNode] = true;

  for (const [nxtNode, dist] of graph[curNode]) {
    const newDist = curDist + dist;
    if (newDist < distances[nxtNode]) {
      distances[nxtNode] = newDist;
      pq.enqueue([nxtNode, newDist]);
    }
  }
}

for (let i = 1; i <= v; i++) {
  console.log(distances[i] === INF ? "INF" : distances[i]);
}
