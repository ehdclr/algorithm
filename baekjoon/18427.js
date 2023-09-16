const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n,m,h] = input[0].split(" ").map(Number);

let a = [];
let d = new Array(h+1).fill(0);

for(let i = 1; i <=n ;i++){
    a.push(input[i].split(" ").map(Number));
}

d[0] = 1;
//모든 학생에 대해서 처리 
for(let i = 0 ; i <n;i++){
    let data = [];
    for(let j = 0 ; j<=h;j++){ //쌓을 수 있는 높이
        for(let k = 0 ; k<a.length;k++){ //학생의 모든 블록을 확인
            if(d[j] != 0 && j + a[i][j] <=h){
                data.push([j+a[i][k],d[j]]); 
            }
        }
    }
    for([height, value] of data) {
        d[height] = (d[height] + value) % 10007;
    }
}

console.log(d[h]);

