const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let dp = new Array(50001).fill(0);

dp[1] = 1;



for(let i = 2; i <=n;i++){

    let arr = [];
    //n 해당 숫자보다 작은 제곱근들의 합으로 나타내는 것 
    for(let j= 1 ; j*j<=i ; j++){
        


    }
    let newSet = new Set();

}
