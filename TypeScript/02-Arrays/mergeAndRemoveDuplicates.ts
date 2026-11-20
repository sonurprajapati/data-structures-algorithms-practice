let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let merge = [...arr1, ...arr2]
let duplicates: number[] = [];
let newArr = [];

for (let i = 0; i < merge.length; i++) {
    // console.log(merge[i]);
    for (let j = i + 1; j < merge.length; j++) {
        if (merge[i] === merge[j]) {
            if (!duplicates.includes(merge[i])) {
                duplicates.push(merge[j]);
            }
        }
    }
}

// let position;
// // console.log(merge);
// for (let i = position; i < merge.length - 1; i++) {
//     merge[i] = merge[i + 1];
// }
// merge.length = merge.length - 1;
// console.log(merge);

for (let i = 0; i < merge.length; i++) {
    console.log(merge[i]);
    for (let j = i + 1; j <= merge.length; j++) {
        if (merge[i] === duplicates[j]) {
            let position = i;
            for (let i = position; i < merge.length - 1; i++) {
                merge[i] = merge[i + 1];
            }
            merge.length = merge.length - 1;
            // newArr.push(merge[i]);
            // break;
        }
    }
}

console.log(merge);

export { }