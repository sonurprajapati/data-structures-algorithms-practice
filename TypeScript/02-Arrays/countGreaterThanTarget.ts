let numbers = [12, 45, 7, 89, 23, 56, 34, 78];
let target = 40;
// let given = [];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > target) {
        count++;
    }
}
console.log(count);
export { };