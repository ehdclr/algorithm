let fs =require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = 0;
let testCase = 1;

while(true){

    let [n,m] = input[line].split(" ").map(Number);
    if(n==0 && m==0) break;
}
// 0 4 10 17

function isCycle(x,prev){
    visited[x] = true;
    for(let y of graph[x]){
        if(!visited[y]) {
            if(isCycle(y,x)) return true;
        }
        else if( y!= prev) return true;
    }

    return false;
}