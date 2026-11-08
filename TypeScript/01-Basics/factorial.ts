let number = 5;
let fact = 1;

for (let i = 1; i <= number; i++) {
    fact = fact * i;
}
console.log(fact);

// function fact(num: number): number {
//     if(num ===0 || num ===1){
//         return 1;
//     }
//     return num * fact(num - 1);
// }

// console.log(fact(5));

export { }