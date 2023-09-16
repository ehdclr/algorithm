let fs =require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//! 못 푼 문제 

let n = Number(input[0]);
let army = input[1].split(" ").map(Number);
army.reverse();

function lowerBound(arr,target,start,end){
    while(start<end){
        let mid = parseInt((start+end)/2);
        if(arr[mid]>= target) end = mid;
        else start = mid+1;
    }
    return end;
}

let d = [0];

for(let x of army){
    if(d[d.length -1] < x){
        d.push(x);
    } 
    else{
        let index = lowerBound(d,x,0,d.length);
        d[index] = x;
    }
}
console.log(d);
console.log(n - (d.length -1));
