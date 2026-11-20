let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7];

for(let i=0; i<arr2.length; i++){
    arr1.push(arr2[i]);
}

console.log(arr1);

// for this one remove for loop too. no need of for loop. Just arr1 and arr2 that's it.
// console.log([...arr1, ...arr2]);

export{}