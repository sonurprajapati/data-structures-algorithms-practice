let text = "programming";
let target = "g";
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (target.includes(text[i])) {
        count++;
    }
    // if(target == text[i]){
    //     count++;
    // }
}
console.log(count);
export { };