let numbers = [12, 45, 7, 89, 23, 56, 34];

let largest = 0;
let secondLargest = 0;
for (let i = 0; i < numbers.length; i++) {
    if (largest < numbers[i]) {
        secondLargest = largest;
        largest = numbers[i];
    } else if (secondLargest < numbers[i] && largest !== numbers[i]) {
        secondLargest = numbers[i];
    }
}
console.log(secondLargest);
export { };