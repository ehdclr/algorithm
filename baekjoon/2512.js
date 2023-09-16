let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n =Number(input[0]);

let cost = input[1].split(" ").map(Number);
let sum = Number(input[2]);

let start =  1;
let end = cost.reduce((a,b)=>Math.max(a,b));

let result =0;


while(start <=end){
    let mid = parseInt((start+end)/2);
    let total = 0;
    for(let i = 0; i <cost.length; i++){
        total += Math.min(mid,cost[i]);
    }

    if(total <=sum){
        result =mid;
        start = mid+1;
    }
    else{
        
        end = mid-1;
    }
}

console.log(result);