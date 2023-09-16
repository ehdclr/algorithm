let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n")

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

  let n = Number(input[0]);
  let m = Number(input[1]);

  let graph  =[];
  for(let i = 1; i <=n;i++) graph[i] =[];
  for(let i = 1; i <=m;i++){
    let [a,b] = input[i+1].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }


  let distance = new Array(n+1).fill(-1);
  distance[1] =0

  let queue = new Queue();
  queue.enqueue(1) // 친구와의 관계

  while(queue.getLength()!=0){
    let cur = queue.dequeue();
  
    
    for(let friend of graph[cur]){
        if(distance[friend] == -1){
            distance[friend] = distance[cur] +1;
            queue.enqueue(friend);
        }
    }
  }

  let result = 0;
  for(let i = 1; i <=n;i++){
    if(distance[i] != -1 && distance[i] <=2){
        result++;
    }
  }

  console.log(result -1);