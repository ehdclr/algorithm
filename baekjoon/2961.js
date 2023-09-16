let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");


//!신맛은 재료의 신맛의 곱 쓴맛은 합이다.
//!신맛과 쓴맛의 차이를 작게 하려고한다. 
//!적어도 재료 하나는 ㅎ사용해야한다. 
//! 일단 재료는 죽어도 한번은 다 써봐야함 그중 가장 작은것 

let n = Number(input[0]);
let arr = [];
for(let i = 1; i <=n;i++){
    let [a,b] = input[i].split(" ").map(Number);
    arr.push([a,b]);
}



let minValue = 1e9;
let result = [];
let visited = new Array(n).fill(false);

//!전체 갯수는 4C1 + 4C2+ 4C3+ 4C4 = 4 + 6 + 4 +1 = 15개 


function dfs(depth,start){
    if(depth >=1){
        let totalCost = 0;
        let sour = 1;
        let bitter = 0;
        for(let i of result){
            sour *= arr[i][0];
            bitter += arr[i][1];
        }
        totalCost = Math.abs(sour - bitter);

        minValue = Math.min(minValue,totalCost);

    }
    for(let i = start ; i<n;i++ ){
        if(visited[i]) continue;
        result.push(i);
        visited[i] = true;
        dfs(depth+1,i+1);
        result.pop();
        visited[i] = false;
    }

}

dfs(0,0)
console.log(minValue);