let numbers = [12, 45, 7, 89, 23, 56];
let sortNumbers = numbers.sort((a, b) => a - b);
let longLength = sortNumbers.length - 1;
let largest = sortNumbers[longLength];
console.log(largest);
export { };