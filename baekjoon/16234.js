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

//국경선이 인접한 두 국가의 인구수 차이가 L명 이상 R명이하면 국경선을 연다.
// 조건이 충족되면 인구 이동을 하고 두 연합의 각 칸의 인구수는 총 인구수 / 연합을 이루고 있는 칸의 개수 -> 소숫점은 버린다.
//인구가 평등해진다.
let [n, l, r] = input[0].split(" ").map(Number);

let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let totalCount = 0;

//인구 이동을 하고 난 뒤에 인접한 칸이 차이가 충족하는 지 확인

//연합을 묶는 배열을 만든다. -> 이 배열들이 모두 같아지면, 한번의 이동이 마친 것,

function bfs(x, y, index, union) {
  let united = [[x, y]]; //x,y의위치와 연결된 나라(연합) 정보를 담는 리스트

  let queue = new Queue();
  queue.enqueue([x, y]);
  union[x][y] = index;

  let summary = graph[x][y]; //현재 연합의 전체 인구
  let cnt = 1; //현재 연합의 국가 수

  while (queue.getLength() != 0) {
    let [x, y] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (0 <= nx && nx < n && 0 <= ny && ny < n && union[nx][ny] == -1) {
        let dif = Math.abs(graph[nx][ny] - graph[x][y]);
        if (l <= dif && dif <= r) {
          queue.enqueue([nx, ny]);
          union[nx][ny] = index;
          summary += graph[nx][ny];
          cnt += 1;
          united.push([nx, ny]);
        }
      }
    }
  }

  for (let unit of united) {
    let [i, j] = unit;
    graph[i][j] = parseInt(summary / cnt);
  }
}

while (true) {
    //한번 연합을 달성 한 뒤에 시민이동을 하고  union은 초기화 
  let union = Array.from(Array(n), () => Array(n).fill(-1));

  let index = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (union[i][j] == -1) {
        console.log(i, j, index, union);
        bfs(i, j, index, union);

        index++;
      }
    }
  }
  if (index == n * n) break;
  totalCount += 1;
}

console.log(totalCount);
