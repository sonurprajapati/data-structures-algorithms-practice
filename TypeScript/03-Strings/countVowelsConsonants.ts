function countVowelsConsonants1(): void {
    let silent = "silent";
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelsCount = 0;

    for (let i = 0; i <= silent.length - 1; i++) {
        for (let j = 0; j <= vowels.length - 1; j++) {
            if (silent[i] == vowels[j]) {
                vowelsCount = vowelsCount + 1;
                break;
            }
        }
    }
    console.log('vowelsCount: ', vowelsCount);
    console.log('consnCount: ', silent.length - vowelsCount);
}

function countVowelsConsonants2(): void {
    let silent = "silent";
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelsCount = 0;
    let consnCount = 0;

    for (let i = 0; i <= silent.length - 1; i++) {
        if (vowels.includes(silent[i])) {
            vowelsCount++;
        } else {
            consnCount++
        }
    }
    console.log('vowelsCount: ', vowelsCount);
    console.log('consnCount: ', consnCount);
}

countVowelsConsonants1();
countVowelsConsonants2();

export { };