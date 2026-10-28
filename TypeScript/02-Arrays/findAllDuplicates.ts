const arr = [4, 2, 7, 2, 8, 4, 9, 7];

let duplicate = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            duplicate.push(arr[i]);
            break;
        }
    }
}
console.log(duplicate);
export { };