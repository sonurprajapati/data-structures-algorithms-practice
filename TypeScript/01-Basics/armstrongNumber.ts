let num = 54748
let leng = num.toString();
let numArr = [];
let arm = 0;

for(let i=0; i<leng.length; i++){
    numArr.push(Number(leng[i]));
}

for(let i=0; i<numArr.length; i++){
    let mul = 1
    let newNum = numArr[i]
    for(let j=0; j<numArr.length; j++){
        mul = mul * newNum
    }
    arm = arm + mul;
}

if(num === arm){
    console.log(num + ": is a armstrong number");
}else{
    console.log(num + ": is not a armstrong number");
}