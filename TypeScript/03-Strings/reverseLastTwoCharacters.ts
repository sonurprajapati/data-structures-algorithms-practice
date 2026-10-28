let text = "rajeev";
let remainglength = text.length - 2;
let textHalf1 = "";
for (let i = 0; i < remainglength; i++) {
    textHalf1 += text[i];
}
let textHalf2 = "";
for (let i = remainglength; i < text.length; i++) {
    textHalf2 += text[i];
}
let textHalf2Reverse = "";
for (let i = textHalf2.length - 1; i >= 0; i--) {
    textHalf2Reverse += textHalf2[i];
}
console.log(textHalf1 + textHalf2Reverse);
export { };