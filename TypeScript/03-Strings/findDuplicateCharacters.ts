let text = "Sonu Radheshyam Prajapati";
text = text.toLowerCase();
let duplicate: string[] = [];
for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
        if (text[i] === text[j]) {
            if (!duplicate.includes(text[i])) {
                duplicate.push(text[i]);
            }
            break;
        }
    }
}
console.log(duplicate);
export { };