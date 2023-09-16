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

let [s, t] = input[0].split(" ").map(Number);

let queue = new Queue();
queue.enqueue([s,'']);
let visited = new Set([s]);
let found = false;

if(s==t){
    console.log(0);
}

while(queue.getLength()!=0){
    let [value,opers] = queue.dequeue();
    if( value>1e9) continue;
    if( value ==t) {
        console.log(opers);
        found =true;
        break;
    }
    for(let oper of ["*","+","-","/"]){
        let nextValue = value;
        if(oper =="*") nextValue *=value;
        if(oper =="+") nextValue +=value;
        if(oper =="-") nextValue -=value;
        if(oper =="/" && value !=0) nextValue /=value;
        if(!visited.has(nextValue)){
            queue.enqueue([nextValue,opers+oper]);
            visited.add(nextValue);
        }
    }
}
if(!found) console.log(-1);