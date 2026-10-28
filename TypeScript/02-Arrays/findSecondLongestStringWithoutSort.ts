let words = ["cat", "elephant", "tiger", "butterfly", "dog", "computer"];
let wordsLen: number[] = [];
for (let i = 0; i < words.length; i++) {
    wordsLen.push(words[i].length);
}
let largest = 0;
let secondLargest = 0;
for (let i = 1; i < wordsLen.length; i++) {
    if (largest < wordsLen[i]) {
        secondLargest = largest;
        largest = wordsLen[i];
    } else if (secondLargest < wordsLen[i] && wordsLen[i] !== largest) {
        secondLargest = wordsLen[i];
    }
}
console.log(words[wordsLen.indexOf(secondLargest)]);
export { };