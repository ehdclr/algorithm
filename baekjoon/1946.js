let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCases = Number(input[0]);

let line = 1; 

for(let tc = 1 ; tc<=testCases;tc++){
    let test = Number(input[tc]);
    let person = [];
    for(let x= line+1; x<=line+test ; x++){
        
        
        let [a,b] = input[x].split(" ").map(Number);
        person.push([a,b]);
    }
        person.sort((a,b)=>a[0] - b[0]);
        let total =0;
        let min = 100001;
        for(let i = 0 ; i<person.length; i++){
            if(person[i][1] <min){
                total +=1;
                min = person[i][1];
            }
        }
        console.log(total);
        line += test+1;
    }
   



