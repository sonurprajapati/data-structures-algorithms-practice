let num1 = 0;
let num2 = 15;
let num1Arr = [];
let num2Arr = [];
let duplicate = [];

for(let i=1; i<=num1; i++){
    if(num1%i === 0){
        num1Arr.push(i);
    }
}
for(let i=1; i<=num2; i++){
    if(num2%i === 0){
        num2Arr.push(i);
    }
}
for(let i=0; i<num1Arr.length; i++){
    for(let j=0; j<num2Arr.length; j++){
        if(num1Arr[i] === num2Arr[j]){
            duplicate.push(num1Arr[i]);
        }
    }
}

console.log(duplicate.at(-1));

export{}