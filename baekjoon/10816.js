let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

//? 숫자카드 N개  정수 M개 

//? 1<= N<=500,000 -10,000,000 <= 숫자 <= 10,000,000
//? 1<=M <= 500,000

let n = Number(input[0]);
let number = input[1].split(" ").map(Number);
let m = Number(input[2]);
let cardNum = input[3].split(" ").map(Number);


function lowerBound(arr, target, start, end) {
    while (start < end) {
      let mid = parseInt((start + end) / 2);
      if (arr[mid] >= target) end = mid;
      else start = mid + 1;
    }
    return end;
  }
  
  function upperBound(arr, target, start, end) {
    while (start < end) {
      let mid = parseInt((start + end) / 2);
      if (arr[mid] > target) end = mid;
      else start = mid + 1;
    }
    return end;
  }
  
  function countByRange(arr, leftValue, rightValue) {
    let rightIndex = upperBound(arr, rightValue, 0, arr.length);
    let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
    return rightIndex - leftIndex;
  }

  number.sort((a,b)=>a-b);
  let result = "";
  for(let i =0 ; i<m;i++){
    result += countByRange(number,cardNum[i],cardNum[i]) + " ";
  }

  console.log(result);