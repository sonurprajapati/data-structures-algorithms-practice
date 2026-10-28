let words = ["mangoose", "apple", "banana", "avocado", "mango", "apricot", "application", "brothers"];
let target = "m";
let newArr = [];
for (let i = 0; i < words.length; i++) {
    if (target === words[i][0]) {
        newArr.push(words[i]);
    }
}
let longest = newArr[0];
for (let i = 1; i < newArr.length; i++) {
    if (longest.length < newArr[i].length) {
        longest = newArr[i];
    }
}
console.log(longest);
export { };