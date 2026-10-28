let arr = ['flower', 'flight', 'flowend', 'floor', 'flowers'];
let prefix = arr[0];

for (let i = 1; i < arr.length; i++) {
    while (!arr[i].startsWith(prefix)) {
        prefix = prefix.slice(0, -1);
    }
}
console.log(prefix);
export { };