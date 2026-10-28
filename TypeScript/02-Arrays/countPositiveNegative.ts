let numbers = [12, -5, 8, -21, 0, 15, -7, 3, -10];
let positive = 0;
let negative = 0;
let zero = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negative++;
    }
    if (numbers[i] > 0) {
        positive++;
    }
    if (numbers[i] == 0) {
        zero++;
    }
}
console.log("positive: " + positive);
console.log("negative: " + negative);
console.log("zeos: " + zero);
export { };