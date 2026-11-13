let num = 3432;
let leng = num.toString();
let newNum = [];
let resultArray = [];

for(let i=0; i<leng.length; i++){
    newNum.push(num.toString()[i]);
}

for(let i=newNum.length-1; i>=0; i--){
    resultArray.push(newNum[i]);
}

if(num === parseInt(resultArray.join(''))){
    console.log(num + ": is a palindrome number");
}else{
    console.log(num + ": is not a palindrome number");
}

export{}