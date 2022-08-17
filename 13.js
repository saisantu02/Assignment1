let str =  '{"Javascript" : "The Good Parts", "Author": "Douglas Crockford"}';
function findAuthor(str)
{
let obj = JSON.parse(str);
return `The author is ${obj.Author}`;
}
console.log(findAuthor(str));