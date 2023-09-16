let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let n = Number(input[0]);

let dist = input[1].split(" ").map(Number);
let cityCost  = input[2].split(" ").map(Number);


let result = 0;
let min = 10001;
for(let i =0; i<n ; i++){
    
    if(min > cityCost[i] ){
        min = cityCost[i];
    }
    cityCost[i] = min;
}



for(let j =0 ; j<dist.length; j++){
    
    result += cityCost[j] * dist[j];
    
}
console.log(result);