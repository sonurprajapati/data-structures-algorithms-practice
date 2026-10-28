let numbers = [27, 14, 63, 88, 5, 42, 71, 36, 19, 50, 93];
let odd = 0;
let even = 0;
for (let i = 0; i < numbers.length; i++) {
    let divide = numbers[i] % 2
    if (divide == 0) {
        even++;
    }
    else {
        odd++;
    }
}
console.log("even: " + even);
console.log("odd: " + odd);
export { };