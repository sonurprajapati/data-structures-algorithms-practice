let words = ["cat", "elephant", "tiger", "butterfly", "dog", "computer"];
let wordsLen: number[] = [];
for (let i = 0; i < words.length; i++) {
    wordsLen.push(words[i].length);
}
let wordsLenSorted = [...wordsLen];
for (let i = 0; i < wordsLenSorted.length; i++) {
    for (let j = i + 1; j < wordsLenSorted.length; j++) {
        if (wordsLenSorted[i] > wordsLenSorted[j]) {
            let temp = wordsLenSorted[i];
            wordsLenSorted[i] = wordsLenSorted[j];
            wordsLenSorted[j] = temp;
        }
    }
}
console.log(words[wordsLen.indexOf(wordsLenSorted[wordsLenSorted.length - 2])]);
export { };