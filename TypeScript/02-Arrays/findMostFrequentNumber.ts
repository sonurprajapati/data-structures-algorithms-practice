let numbers = [2, 5, 3, 2, 8, 5, 2, 9, 5, 5, 9];
let frequency = [];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            count++;
        }
    }
    frequency.push(count);
    count = 0;
}
let largest = frequency[0];
let maxIndex = 0;
for (let i = 0; i < frequency.length; i++) {
    if (frequency[i] > largest) {
        largest = frequency[i];
        maxIndex = i;

    }
}
console.log("number is: " + numbers[maxIndex])
console.log("occurance is: " + frequency[maxIndex]);
export { };