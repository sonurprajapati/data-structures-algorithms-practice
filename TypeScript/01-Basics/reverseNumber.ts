let num = 5832;
let reverse = 0;
while (num) {
    let digit = num % 10;
    reverse = (reverse * 10) + digit
    num = Math.floor(num / 10);
}
console.log(reverse);
export { };