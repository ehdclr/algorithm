let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

//?나무 M미터가 필요
//? 절단기에 높이 H를 지정 H보다 큰 나무는 H위의 부분이 잘린다 낮은나무는 안잘림

//? 절단기 높이는 양의정수 혹은 0

//? 나무 수 N 집으로 가져가려는 나무 M미터 1<= N <= 1000000 , 1<= M <= 2000000000
//? 둘째 줄 나무 높이 

let [n,m] = input[0].split(" ").map(Number);
let treeArr = input[1].split(" ").map(Number);

let start = 0;
let end = treeArr.reduce((a,b)=> Math.max(a,b)); 



let result = 0;
while(start<=end){
    let total =0;

    let mid = parseInt((start+end)/2);

    for(let i = 0; i<=n;i++){
        total += treeArr[i] > mid ? treeArr[i] - mid : 0; 
    }

    if(total >=m){
        result = mid;
        start = mid+1;
    }
    else if(total<m){
        end = mid-1;
    }
    
}

console.log(result);