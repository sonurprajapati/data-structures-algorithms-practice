let numbers = [18, 5, 42, 9, 31, 14, 50, 7, 26];
let target = 20;
// let given = [];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < target) {
        count++;
    }
}
console.log(count);
export { };