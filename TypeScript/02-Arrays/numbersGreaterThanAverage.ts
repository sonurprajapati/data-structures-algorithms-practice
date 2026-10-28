let numbers = [10, 25, 40, 15, 60, 30, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average = sum / numbers.length;
console.log(average);
let greater = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > average) {
        greater.push(numbers[i]);
    }
}
console.log(greater);
export { };