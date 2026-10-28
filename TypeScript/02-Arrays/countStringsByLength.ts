let words = ["cat", "elephant", "dog", "tiger", "butterfly", "ox", "computer"];
let targetLength = 5;
let count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i].length > targetLength) {
        count++;
    }
}
console.log(count);
export { };