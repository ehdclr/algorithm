let fs =require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a,b] = input[0].split(" ").map(Number);

let total = 1; 
let flag = false;
while(a<=b){
    if(a==b) {
        flag =true;
        console.log(total);
        
        break;
    }
    if(b %2 ==0){
        b = parseInt(b/2);
    }
    else if( b%10 !==0){
        b = parseInt(b/10);
        
    }
    else break;
    total++

}

if(!flag){
    console.log(-1);
}