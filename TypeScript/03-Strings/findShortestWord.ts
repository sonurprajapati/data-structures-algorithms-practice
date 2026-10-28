let text = "I am learning Playwright automation";
let words = text.split(" ");
let longest = words[0];
for (let i = 1; i < words.length; i++) {
    if (longest.length > words[i].length) {
        longest = words[i];
    }
}
console.log(longest);
export { };