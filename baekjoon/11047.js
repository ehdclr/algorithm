let fs= require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [k,n] = input[0].split(" ").map(Number);

let coin = [];
for(let i = 1; i <=k ;i++){
    coin.push(Number(input[i]));
}

let result = 0;
for(let i = k-1 ; i>=0 ;i--){
    result += parseInt(n/coin[i]);
    n = n % coin[i];
}

console.log(result);