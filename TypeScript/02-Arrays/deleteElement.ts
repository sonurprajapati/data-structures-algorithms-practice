let num = [12, 52, 94, 83, 5, 0, 43, 9, 7];
let position = 3;
console.log(num);
for (let i = position; i < num.length-1; i++) {
        num[i] = num[i+1];
}
num.length = num.length-1;
console.log(num);
export { };