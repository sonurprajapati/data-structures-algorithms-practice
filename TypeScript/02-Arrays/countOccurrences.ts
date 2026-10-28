let numbers = [10, 20, 10, 30, 40, 10, 50, 20];
let find = 10;
let occurrences = 0;

for (let i = 0; i < numbers.length; i++) {
    if (find == numbers[i]) {
        occurrences++;
    }
}
console.log(occurrences);
export { };