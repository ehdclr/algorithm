const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const INF = 1e9;

let graph =[new Array(n+1).fill(INF)];
for(let i = 1; i <=n;i++){
    graph.push(new Array(n+1).fill(INF));
    let line = input[i].split("");
    for(let j = 0;j<n;j++){
        if(line[j] =="Y") graph[i][j+1] = 1;
    }
}

for(let i = 1 ; i<=n;i++) graph[i][i] =0;

for(let k = 1; k <=n;k++){
    for(let a = 1; a<=n;a++){
        for(let b = 1 ; b<=n;b++){
            let cost = graph[a][k] + graph[k][b];
            if(graph[a][b] > cost){
                graph[a][b] = cost;
            }
        }
    }
}

let twoFriends = new Array(n+1).fill(0);

for(let i = 1; i<=n;i++){
    for(let j = 1; j<=n;j++){
        if(i!=j && graph[i][j]<=2) twoFriends[i]++;
    }
}

console.log(twoFriends.reduce((a,b)=>Math.max(a,b)));