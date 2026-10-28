let text = "apple banana avocado mango apricot orange assess";
let target = "a";
let words = text.split(" ");
let count = 0;
for (let i = 0; i < words.length; i++) {
    // if(target == words[i][0]){
    //     count++;
    // }
    if (words[i].startsWith(target)) {
        count++;
    }
}
console.log(count);
export { };