let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let n = 0;
let arr = [];
for( let tc = 1; tc<=testCase;tc++){
    n = Number(input[tc]);
    arr = [];
    for(let i = 1; i<=n;i++) arr.push(i);
    dfs([],0);
    console.log();
}


function dfs(result,depth){
    //! 중간에 + - " "  이 결정을 하니까 7까지의 숫자면, 6개가 최대 깊이가 됨 
    if( depth == n-1){ //!현재 순열 처리(중복 순열)
        let str = ""; //!현재 수식 문자열 
        for(let i = 0 ; i<n-1;i++) str += arr[i] + result[i];
        str += arr[n-1] + "";
        let current = eval(str.split(" ").join(""));
        if (current ==0) console.log(str);
        return;
    }

    //! 백준 출력을 맞추려면 이렇게 순서를 맞춰야한다.
    for(let x of [" ","+","-"]){
        result.push(x);
        dfs(result,depth+1);
        result.pop();
    }
    

}

