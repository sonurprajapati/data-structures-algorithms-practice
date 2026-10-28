let str = "something";
let odd = '';
let even = '';
for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        odd = odd + str[i];
    } else {
        even = even + str[i];
    }
}
console.log(odd);
console.log(even);
export { };