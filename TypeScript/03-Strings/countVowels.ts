let text = "javascript";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
        count++;
    }
}
console.log(count);
export { };