let numbers = [5, 8, 3, 9, 8, 6, 2, 7, 5, 8];
let seenNumbers = new Set();
let duplicate = null; // 1. Create a variable to hold the duplicate value

for (let i = 0; i < numbers.length; i++) {
    if (seenNumbers.has(numbers[i])) {
        duplicate = numbers[i]; // 2. Assign the value to our variable
        break;                  // 3. Use 'break' instead of 'return' to stop the loop
    }
    seenNumbers.add(numbers[i]);
}

console.log(duplicate);
export { };