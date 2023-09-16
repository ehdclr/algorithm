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

let [n, m] = input[0].split(" ").map(Number);

let graph = [];

for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map(Number);
  graph.push(line);
}

//내부에 있는 0은 안침 

let dx = [-1,1,0,0];
let dy = [0,0,-1,1];

function bfs(){
    let visited = [];
    for(let i = 0 ; i<n ;i++) visited.push(new Array(m).fill(false));
    visited[0][0] = true; //제일 왼쪽 위에서 시작
    let queue = new Queue();
    queue.enqueue([0,0]);

    while(queue.getLength()!=0){
        let [x,y] =queue.dequeue();
        for(let i = 0 ; i<4 ;i++){
            let nx = x + dx[i];
            let ny = y + dy[i];

            if(nx<0 || nx>= n || ny <0 || ny >= m) continue;
            if(!visited[nx][ny]){
                if(graph[nx][ny] >=1) graph[nx][ny] +=1;
                else{
                    queue.enqueue([nx,ny]);
                    visited[nx][ny] = true;
                }
            }
        }
    }
}

function melt(){
    let finish = true;
    for(let i = 0 ; i<n ;i++){
        for(let j = 0 ; j <m;j++){
            if(graph[i][j] >=3) {
                graph[i][j] =0;
                finish = false;
            }
            else if (graph[i][j] ==2) graph[i][j] =1; //한면만 닿은 경우 무시
        }
    }
    return finish;
}

let result = 0;
while(true){
    bfs();
    if(melt()){
        console.log(result);
        break;
    }
    else result +=1;
}