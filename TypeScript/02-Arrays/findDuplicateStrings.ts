let words = ["apple", "banana", "apple", "orange", "banana", "mango"];
let final = [];
let count = 0;
for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
        if (words[i] === words[j]) {
            final.push(words[i]);
            count++;
            break;
        }
    }
}
console.log(final);
console.log(count);
export { };