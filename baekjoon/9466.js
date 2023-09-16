let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let testCases = Number(input[0]);

let line = 1;
while(testCases--){
    let n = Number(input[line]);
    let student = [0,...input[line+1].split(" ").map(Number)];
    let visited = new Array(n+1).fill(false);
    let finished = new Array(n+1).fill(false); //방향 그래프의 사이클은 스택을 이용해야함 --> 스택을 생각해야하기 때문에 
    let result = []


    let cnt = 0;
    for(let i = 1; i <=n;i++){
       if(!visited[i]) dfs(i,student,visited,finished,result);
    }

    
    line += 2;
    console.log(n - result.length);

}

function dfs(x,graph,visited,finished,result){
    visited[x] = true;
    let y = graph[x]; //다음 노드 
    if(!visited[y]){
        dfs(y,graph,visited,finished,result);
    }
    else if(!finished[y]){
        while(y !=x){
            result.push(y);
            y = graph[y];
        }
        result.push(x);
    }

    finished[x] =true;
    
}

