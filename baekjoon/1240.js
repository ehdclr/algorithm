let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n,m] = input[0].split(" ").map(Number);

let graph =[];
let cnt;
let visited;
let selected;
for(let i= 0 ; i<=n;i++) graph[i] =new Array(n+1).fill(0);
for(let i =1; i<=n-1;i++){
    let[x,y,k] = input[i].split(" ").map(Number);
    graph[x][y] = k;
    graph[y][x] = k;
}

for(let i = n ; i< n+m ; i++){
   cnt = 0;
   //start에서 방문한 곳
   visited =new Array(n+1).fill(false);
   selected = [];
   let [x,y] = input[i].split(" ").map(Number)
    visited[x] =true;
    dfs(graph,x,y);
   console.log(cnt);

}


/*

방문이 3 -- 2 구해짐 방문 3 방문 4 -거리 2  start = 4 end =2로 바뀜
그다음 4 -- 3,4 방문 했으니, 1,2만 남음  
그다음 1  

*/


function dfs(graph,start,end){

    if(graph[start][end]){
        cnt += graph[start][end];
    }
    else{
        for(let i = 1; i <= n ;i++){
            if(visited[i]) continue;
            if(graph[start][i]){
                visited[i] = true;
                cnt += graph[start][i];
                dfs(graph,i,end);
            }
        }
    }

        

   
        
    

}
