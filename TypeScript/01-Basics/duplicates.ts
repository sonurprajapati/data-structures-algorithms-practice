// let str = "Sonu Radheshyam Prajapati";
// let str = [1,44,2,1,5,6,7,55,66,55,7,8,7,8,9,0,9,0,,99,,3,3,2];
let strLower = ["sonu", "pra", "Sonu", "Prajapati", "radhe", "Shyam", "Radhe", "pra"];
let str = [];
for (let i = 0; i < strLower.length; i++) {
    let temp = strLower[i].toLowerCase();
    str.push(temp);
}
// str = str.toLowerCase();
let duplicate: string[] = [];
for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
        if (!duplicate.includes(str[i])) {
            if (str[i] === str[j]) {
                duplicate.push(str[i]);
                break;
            }
        }
    }
}
console.log("duplicates: " + duplicate);
export { }