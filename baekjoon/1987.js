let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [r,c] = input[0].split(" ").map(Number);

let alpha = [];

for(let i = 1; i<= r; i++){
    let data = input[i]
    for(let j = 0 ; j<c; j++) alpha.push(data[j]);
}


//!가로 혹은 세로 한번 움직이는 것이니까 

//!up down left right;

let visited = [];//!방문한 알파벳
visited.push(alpha[0][0]);


//!현재 인덱스 위치 범위
function curIndex(x,y){
    if(x >= r || y >=c) return false;
    if(x <0 || y< 0) return false;
    return true;
}


function moveIndex(x,y,move){
    if(move ="up") y -=1;
    else if(move ="down") y+=1;
    else if(move = "left") x -=1;
    else if(move="right") x +=1; 
    return [x,y];   
}



function dfs(result,depth){
    //!하나씩 더해야함 
    if(depth >=1){
        //!현재 위치 
        if(visited.length ===1){
            curX = 0;
            curY = 0;
        }

        //! result는 현재 움직임임  움직임을 쌓는 것임 

        for(let i of result){
           [curX,curY] = moveIndex(curX,curY,i);//!인덱스 바꾸기
           if(!curIndex(curX,curY)) return;
           let data = alpha[x][y];
           if(visited.includes(data)) return;
           visited.push(data);
            //!여기서 이미 방문한 적이 있는 것이라면 멈추기
        }
        


    }

    for(let x of ["up","down","left","right"]){
        result.push(x);
        dfs(result,depth+1);
        result.pop();
    }
}

dfs([],0);
console.log(visited.length);