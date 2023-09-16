let fs= require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let arr = [];
let visited;
let selected;


//! 8C6 = 8 
let answer;
for(let i = 0; i <input.length-1;i++){
    arr = [];
    visited =[];
    selected =[];
    answer="";
    let testCase= input[i].split(" ").map(Number)[0];
    arr = input[i].split(" ").map(Number).slice(1);
    visited = new Array(testCase).fill(false);
    dfs(arr,0,0);
    console.log(answer);

}





function dfs(arr,depth,start){
    if(depth == 6){
       let result = [];
        for(let i of selected) result.push(arr[i]); 
        for(let x of result) answer+= x + " ";
        answer+= "\n";
        return

    }
    
    for(let i = start ; i<arr.length ;i++){
        if(visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(arr,depth+1,i+1);
        selected.pop();
        visited[i] = false;
    }


}