let words = ["apple", "kiwi", "banana", "fig", "orange", "pear"];
let shortest = words[0];
for (let i = 1; i < words.length; i++) {
    if (shortest.length > words[i].length) {
        shortest = words[i];
    }
}
console.log(shortest);
export { };