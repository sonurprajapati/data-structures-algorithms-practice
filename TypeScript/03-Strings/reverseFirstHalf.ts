let text = "rajeev";
let textHalfCount = text.length / 2;
let textHalf11 = "";
let textHalf22 = "";
for (let i = 0; i < textHalfCount; i++) {
    textHalf11 += text[i];
}
for (let i = textHalfCount; i < text.length; i++) {
    textHalf22 += text[i];
}
// console.log(textHalf11);
// console.log(textHalf22);
// let textHalf1 = text.slice(0, textHalfCount);
// let textHalf2 = text.slice(textHalfCount);
let textHalfReverse = "";
for (let i = textHalf11.length - 1; i >= 0; i--) {
    textHalfReverse += textHalf11[i];
}
console.log(textHalfReverse + textHalf22);
export { };