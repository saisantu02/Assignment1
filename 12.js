let givenArr = [
    [1,2,4],
    [4,5,6],
    [6,7,[1,4,3]],
    6
]

let resultArr = [];

function arrfind(e){
    if(Array.isArray(e)) return e.map(arrfind);
    if(!(resultArr.includes(e))) resultArr.push(e);
    else return;
}

givenArr.map(arrfind);

console.log(resultArr);