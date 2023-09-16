let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let k = Number(input[0]);

let num = [];
for(let i = 0 ; i <=9;i++) num.push(i);
let arr = input[1].split(" "); //!부등호 


let maxValue = 0;
let minValue = 1e10 ;

let visited = new Array(10).fill(false);
let selected = [];
//!비교대상은 항상 둘 ! 
//!depth가 기준 숫자 
//!cur도 인덱스 

let maxNum;
let minNum;


function dfs(depth){
    if(depth ==k+1){
        let result = [];
        for(let i of selected) result.push(num[i]);
        for(let j = 0 ; j<result.length -1 ; j++){
            if(arr[j] =="<"){
                if(result[j] > result[j+1]) return;
            }
            else if(arr[j] ==">"){
                if(result[j] < result[j+1]) return;
            }
        }

        maxValue = Math.max(maxValue,Number(result.join("")))
        minValue = Math.min(minValue,Number(result.join("")))

        

       
    }

    //!비교대상 숫자 
    for(let i = 0 ; i<num.length; i++){
        if(visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(depth+1);
        selected.pop();
        visited[i] = false;
        
    }
}

dfs(0);

if(maxValue.toString().length !=k+1){
    maxValue = "0" + maxValue.toString();
}
else if(minValue.toString().length != k+1){
    minValue= "0" + minValue.toString();
}
console.log(maxValue +"\n"+minValue);

