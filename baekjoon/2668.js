let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let graph = [0];
for(let i = 1; i<=n;i++){
    graph.push(Number(input[i]));
}

let visited= new Array(n+1).fill(false);
let finished= new Array(n+1).fill(false);
let result = [];


function dfs(x){
    //next 노드
    visited[x] = true;
    let y = graph[x]; // 다음 노드 
    if(!visited[y]){
       dfs(y);
    }
    else if(!finished[y]){
        while(y!=x){
            result.push(y);
            y = graph[y];
        }
        result.push(x);
       
    }
    finished[x] = true;
}

for(let i = 1 ; i <=n;i++){
    dfs(i);
}

console.log(result.length);
result.sort((a,b)=>a-b);

result.map((el)=> console.log(el));