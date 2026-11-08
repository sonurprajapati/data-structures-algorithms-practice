let num = [12, 52, 94, 83, 5, 0, 43, 9, 7];
let target = 33;
let position = 3;

for (let i = num.length - 1; i >= 0; i--) {
    if (i >= position) {
        num[i + 1] = num[i];
        if (i == position) {
            num[i] = target;
        }
    }
}

console.log(num);
export { };