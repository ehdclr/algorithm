let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let room = [];

for(let i = 1; i <=n ;i++){
    let [x,y] = input[i].split(" ").map(Number);
    room.push([x,y]);
}

room.sort((a,b)=>{
    if(a[1] != b[1]) return a[1] - b[1];
    else return a[0] - b[0];
});

/**
 1 4
 3 5
 0 6
 5 7
 3 8
 5 9
 6 10
 8 11
 8 12
 2 13
 12 14
 */

 let result = 1;
 let cur = 0;

 for(let i = 1 ; i<n; i++){
    if(room[cur][1] <= room[i][0]){
        cur = i;
        result +=1;
    }
 }

 console.log(result);