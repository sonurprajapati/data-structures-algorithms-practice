let words = ["sky", "apple", "education", "banana", "computer"];
let vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelArr = [];
let mostVowelWord = '';
let mostVowelCount = 0;
for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
        for (let k = 0; k < vowels.length; k++) {
            if (words[i][j] === vowels[k]) {
                mostVowelCount++;
            }
        }
    }
    vowelArr.push(mostVowelCount);
    mostVowelCount = 0;
}
let maxIndex = 0;
let max = vowelArr[0];
for (let i = 1; i < vowelArr.length; i++) {
    if (vowelArr[i] > max) {
        max = vowelArr[i];
        maxIndex = i;
    }
}
console.log(words[maxIndex]);
export { };