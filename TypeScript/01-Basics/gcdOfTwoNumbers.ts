
function findGcd(num1: number, num2: number) {

    let num1Arr = [];
    let num2Arr = [];
    let duplicate = [];

    if (num1 === 0 && num2 === 0) {
        console.log(0);
        return;
    } else if (num1 === 0) {
        console.log(num2);
        return;
    } else if (num2 === 0) {
        console.log(num1);
        return;
    } else if (num1 < 0 || num2 < 0) {
        console.log("Please input a positive or zero numbers");
        return;
    } else {
        for (let i = 1; i <= num1; i++) {
            if (num1 % i === 0) {
                num1Arr.push(i);
            }
        }
        for (let i = 1; i <= num2; i++) {
            if (num2 % i === 0) {
                num2Arr.push(i);
            }
        }
        for (let i = 0; i < num1Arr.length; i++) {
            for (let j = 0; j < num2Arr.length; j++) {
                if (num1Arr[i] === num2Arr[j]) {
                    duplicate.push(num1Arr[i]);
                }
            }
        }
        console.log(duplicate.at(-1));
        return;
    }
}

findGcd(15, 10);

export { }