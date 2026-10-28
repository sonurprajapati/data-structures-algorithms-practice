let text = "Automation";
text = text.toLowerCase();

let visited: string[] = [];

for (let i = 0; i < text.length; i++) {
    if (visited.includes(text[i])) {
        continue;
    }
    let count = 0;
    for (let j = 0; j < text.length; j++) {
        if (text[i] === text[j]) {
            count++;
        }
    }
    visited.push(text[i]);
    console.log(text[i] + ": " + count);
}
export { };