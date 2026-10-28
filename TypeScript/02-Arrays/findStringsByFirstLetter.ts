let words = ["apple", "banana", "avocado", "mango", "apricot", "orange"];
let target = "a";
let count = 0;
let strings = [];
for (let i = 0; i < words.length; i++) {
    if (words[i][0] == target) {
        count++;
        strings.push(words[i]);
    }
}
console.log(strings);
export { };