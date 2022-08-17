// 2


// 3


//4





//5



//6



//7



//8



//9



//10


//11
// let bookList =  
// [
//     {
//         name: "Javascript Good parts",
//         author:"Douglas Crockford",
//         stock:"10"
//     },
//     {
//         name: "A Smarter Way to Learn JavaScript",
//         author: "Mark Meyers",
//         stock:"12"
//     },
//     {
//         name: "Effective Javascript",
//         author:"David Herman",
//         stock:"0"
//     }
// ]

// let filterarr = bookList.filter((e) => e.stock != 0)
// filterarr.forEach((e)=>console.log(e));

//12
// var Set1 = new Set([3,4,5])
// var Set2 = new Set([6,5,3])

// Set2.forEach(Set1.add , Set1)
// console.log(Set1)

//13
let str =  '{"Javascript" : "The Good Parts", "Author": "Douglas Crockford"}';
function findAuthor(str)
{
let obj = JSON.parse(str);
return `The author is ${obj.Author}`;
}
console.log(findAuthor(str));

//14
function distanceTravel(cost)
{
    let dist=0;
    if(cost!=0)
    {
    dist++;
    cost-=3
    }
    while(cost!=0)
    {
        dist++;
        cost-=2;
    }
    return dist;
}
console.log(distanceTravel(0));