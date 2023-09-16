let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

//첫째 줄 숫자
//둘 째 줄 [+,-,x, /] 의 갯수

let arr = input[1].split(" ").map(Number);
let operations = input[2].split(" ").map(Number);

let maxValue = -1e9;
let minValue = 1e9;

function dfs(depth, result) {
  if (depth == n - 1) {
    //Case 4개

    let sum = arr[0];
    for (let i = 0; i < n - 1; i++) {
      if (result[i] == 0) {
        //덧셈
        sum += arr[i + 1];
      }
      if (result[i] == 1) {
        //빼기
        sum -= arr[i + 1];
      }
      if (result[i] == 2) {
        //곱셈
        sum *= arr[i + 1];
      }
      if (result[i] == 3) {
        //나눗셈
        sum = ~~(sum / arr[i + 1]);
      }
    }
    maxValue = Math.max(maxValue, sum);
    minValue =Math.min(minValue, sum);

    return;
  }

  for (let i = 0; i < 4; i++) {
    if (!operations[i]) continue;
    result.push(i);
    operations[i] -= 1;
    dfs(depth + 1, result);
    result.pop();
    operations[i] += 1;
  }
}

dfs(0, []);
console.log(maxValue);
console.log(minValue);
