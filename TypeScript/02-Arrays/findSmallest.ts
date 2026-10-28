let numbers = [23, 894, 546, 22, 3, 89, 12, 23, 59, 16, 82];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (largest > numbers[i]) {
        largest = numbers[i];
    }
}
console.log(largest);
export { };