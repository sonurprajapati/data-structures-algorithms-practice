function findGcd(num1:number, num2:number) {

    // let num1 = Math.abs(a);
    // let num2 = Math.abs(b);

    while(num2 !== 0){
        [num1, num2] = [num2, num1%num2]
    }
    return num1;
}

console.log(findGcd(100, 25));

export{}