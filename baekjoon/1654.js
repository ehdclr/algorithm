let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

//? N개의 랜선 
//? K개의 랜선을 이미 가지고 있고 K개의 랜선은 길이가 각각 다름 
//? 모두 N개의 같은 길이 랜선으로 만들어야함 K개의 랜선을 잘라서 만들어야함 


let [k,n] = input[0].split(" ").map(Number); 

let line = [];

for(let i = 1; i <=k;i++){
    line.push(Number(input[i]));
}

let result = 0;
let start = 1;
let end = line.reduce((a,b)=> Math.max(a,b));



while(start<= end){
    let total = 0;
    let mid = parseInt((start+end)/2);


    for(let x of line){
        total += parseInt(x/mid);
    }

    

    if(total>=n){
        start = mid+1;
        result = mid;
    }
    else{
        end = mid-1;
    }


}

console.log(result);