let numbers = [23, 8, 45, 12, 67, 4, 31];
let largest = numbers[0];
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (largest < numbers[i]) {
        largest = numbers[i];
    }
    if (smallest > numbers[i]) {
        smallest = numbers[i];
    }
}
console.log(largest - smallest);
export { };