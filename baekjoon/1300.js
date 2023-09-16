let fs =require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let k = Number(input[1]);



let start = 1;
let end = 10 **10;

//i 행을 기준으로 , mid 가 사이에 끼어있으면 그 것보다 작은 j를 구해야함
//i * j 이기 때문에 j를 구하려면 -> 이게 일차원 배열로 가면 인덱스 기준이 됨
// mid / i 가 맞네 


let result =0;
while(start<=end){
    let mid = parseInt((start+end)/2);
    let total = 0;
    for(let i =1; i<=n ;i++){
        total += Math.min(parseInt((mid/i),n));
    }
    if( total>=k){
        result = mid;
        end = mid-1;
    }
    else start = mid+1;
}

console.log(result);