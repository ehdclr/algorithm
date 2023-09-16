let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let visited = new Array(10).fill(false);
let selected = [];

let max = -1e9;

function dfs(depth) {
  if (depth == n) {
    let sum =0;

    for (let i = 0; i < n - 1; i++) {
      let cur = Math.abs(selected[i] - selected[i + 1]);
      sum += cur;
    }

    max = Math.max(sum, max);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    selected.push(arr[i]);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(max);
