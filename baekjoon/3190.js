const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

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

//초기 뱀의 길이 1

//* 뱀의 규칙
//* 1. 몸의길이를 늘리고 머리를 다음칸에 위치
//* 2. 벽이나 자기자신의몸과 부딪히면 게임끝
//* 이동한 칸에 사과가 있으면, 사과가 없어짐 꼬리는 안움직임( 몸 길이는 늘어남)
//* 이동한 칸에 사과가 없다면, 몸길이를 줄여서 꼬리가 위치한 칸을 비워준다. 몸길이는 변하지 않음

//뱀의 몸통을 2로 표현하고 뱀의 머리를  3으로 표현

//보드의 크기 n
let n = Number(input[0]);

let graph = [];
for (let i = 0; i < n+1; i++) graph.push(new Array(n+1).fill(0));

let line = 1;

let k = Number(input[line]); //사과의 갯수
for (let i = 1; i <= k; i++) {
  let [x, y] = input[line + i].split(" ").map(Number);
  graph[x][y] = 1; //사과의 위치
  //사과 위치를 1
}
line += k + 1;

let l = Number(input[line])
let move = []
for(let i = 1; i <=l ;i++){
    let [x,c] = input[line+i].split(" ");
    move.push([Number(x),c]);
}



//맨처음 뱀은 오른쪽 방향으로 향해서 감
// 뱀의 머리를 3이라 표현하고 뱀의 
//L이 왼쪽으로 90도 회전
//D가 오른쪽으로 90도 회전


//뱀의 진행 방향과 회전 방향을 알아야함 총 방향은 8가지임 (2가지를 나눔)


let dx = [0,1,0,-1];
let dy = [1,0,-1,0];

function turn(direction,c){
    if(c =="L"){
        direction = direction -1;
        if(direction ==-1) direction =3;
    }
    else direction = (direction +1) %4;
    return direction;
}

let [x,y]=[1,1];
graph[x][y] = 2; //뱀이 처음에 존재하는 위치로 2 내말이 맞지 ? 2헤드 
let direction = 0;
let time = 0 ; // 처음은 0초
let index = 0; //회전할 정보 

let queue = new Queue();
queue.enqueue([x,y]);

while(true){
    let nx= x +dx[direction];
    let ny = y + dy[direction];
    if( 1<= nx && nx <=n && 1<=ny && ny <= n && graph[nx][ny] !=2){ //맵 범위 안에 있고, 뱀의 몸통이 없는 위치라면, 
        if(graph[nx][ny]==0){ //사과가 없다면 이동 후에 꼬리 제거
            graph[nx][ny] =2;
            queue.enqueue([nx,ny]);
            let [px,py] = queue.dequeue();
            graph[px][py] =0;

        }

        if(graph[nx][ny] ==1){
            //사과가 있다면 이동 후에 꼬리 그대로 두기
            graph[nx][ny] =2;
            queue.enqueue([nx,ny]);
        }

    }

    else{
        time +=1; //벽이나 뱀의 몸통과 부딪혔다면,
        break;
    }

    [x,y] = [nx,ny]; //다음 위치로 머리 이동
    time +=1;
    if( index <l && time == move[index][0]){
        direction = turn(direction,move[index][1]);
        index +=1;
    }


}

console.log(time);