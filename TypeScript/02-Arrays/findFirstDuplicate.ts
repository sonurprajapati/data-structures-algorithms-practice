let numbers = [5, 8, 3, 9, 8, 2, 7, 5, 8];
let duplicate = 0;
let found = false;
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            duplicate = numbers[i];
            found = true;
            break;
        }
    }
    if (found) {
        break;
    }
}
console.log(duplicate);
export { };