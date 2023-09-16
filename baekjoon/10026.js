let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let graph = [];

for(let i = 1 ; i<=n;i++){
    let line = input[i];
    graph.push(line);
}

let result = 0;


function dfs(x,y,color,weakness){

    if(weakness)
    


}