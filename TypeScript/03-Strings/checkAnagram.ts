let silent = "cat";
let listen = "tac";

let silentSort = silent.split('').sort().join('');
let listenSort = listen.split('').sort().join('');

if (silentSort == listenSort) {
    console.log('' + silent + ' and ' + listen + ' are anagrams');
}
else {
    console.log('' + silent + ' and ' + listen + ' are not anagrams');
}
export { };