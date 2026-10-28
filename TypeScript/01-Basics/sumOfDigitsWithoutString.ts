let num = 5832;
let sum = 0;
while (num) {
    sum = sum + (num % 10);
    // console.log("sum is: " + sum);
    num = Math.floor(num / 10);
    // console.log("num is: " + num);
}
console.log(sum);
export { };