let number = 20;
let fib = [0, 1];
for (let i = 2; i < number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
}
console.log(fib);
export { }