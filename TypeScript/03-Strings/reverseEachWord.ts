let s = "my name is sonu prajapati"
let arrS = s.split(' ');
let newArr: string[] = [];

for(let i=0; i<arrS.length; i++){
    let temp = arrS[i];
    let rev = "";
    for(let j=temp.length-1; j>=0; j--){
        rev = rev + temp[j]
    }
    newArr.push(rev);
}

console.log(newArr.join(' '));
export{}