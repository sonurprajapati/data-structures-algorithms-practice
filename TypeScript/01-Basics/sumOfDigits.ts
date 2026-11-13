let num = 5832;
let newNum = num.toString();
let sum = 0;
for (let i = 0; i < newNum.length; i++) {
    sum = sum + Number(newNum[i]);
}
console.log(sum);
export { };