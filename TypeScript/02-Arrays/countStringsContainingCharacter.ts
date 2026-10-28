let words = ["apple", "banana", "grapes", "mango", "orange", "kiwi"];
let target = "a";
let count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i].includes(target)) {
        count++
    }
}
console.log(count);
export { };