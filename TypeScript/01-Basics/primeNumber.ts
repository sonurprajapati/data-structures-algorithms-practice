// let num = 29;
// //2, 3, 5, 7, 11, 13, 17, 19, 23, 29

// let isPrime = true;

// if (num <= 1) {
//     console.log(num + ": is not a prime number")
// }

// for(let i=2; i<num; i++){
//     if(num%i===0){
//         isPrime = false;
//         break;
//     }
// }

// if(isPrime){
//     console.log(num + ": is a prime number")
// }else{
//     console.log(num + ": is not a prime number")
// }


//Different Approach

let num = 29;
let count = 0;

for(let i=1; i<=num; i++){
    if(num%i === 0){
        count++;
    }
}

if(count === 2){
    console.log(num + ": is a prime number")
}else{
    console.log(num + ": is not a prime number")
}




export { }