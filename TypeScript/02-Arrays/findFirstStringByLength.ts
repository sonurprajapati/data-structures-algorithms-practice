let words = ["cat", "apples", "doges", "banana", "tiger", "sun"];
let targetLength = 5;
let target = '';
for (let i = 0; i < words.length; i++) {
    if (words[i].length == targetLength) {
        target = words[i];
        break
    }
}
console.log(target);
export { };