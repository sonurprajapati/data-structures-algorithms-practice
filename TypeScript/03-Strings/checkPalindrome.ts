let silent = "madam";
let reverse = "";
for (let i = silent.length - 1; i >= 0; i--) {
    reverse = reverse + silent[i];
}
if (silent == reverse) {
    console.log('' + silent + ' is a palindrome');
}
else {
    console.log('' + silent + ' is not a palindrome');
}

export { };