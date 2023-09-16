let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}

let length = Number(input[0].split(" ")[0]);
let width = Number(input[0].split(" ")[1]);
let height = Number(input[0].split(" ")[2]);

let cubes = new Array(20).fill(0);

let n = Number(input[1]);

for (let i = 2; i <= n + 1; i++) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);
  cubes[a] = b;
}

let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
  used *= 8;
  cur = 2 ** i; //현재의 정육면체 큐브의 길이
  //채워넣어야할 큐브의 개수 계산
  let required =

    //남은 공간에서 채울 수 있는 큐브 갯수 
    //전체에서 쓴부분은 빼야하니까 필요한 큐브 갯수는 (전체에서 현재 큐브 크기의 갯수 - 이미 채운 공간의 갯수)
    parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) -
    used;

  let usage = Math.min(required, cubes[i]);
  res += usage;
  used += usage;
}

//결국  끝에 가면 used는 사이즈가 1인 큐브의 크기가 되니까 사실상 전체 부피랑 같음 

if (used == length * width * height) console.log(res);
else console.log(-1);
