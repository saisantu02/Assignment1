let array=[];
function fizzBuzz(start, end) 
{
    for(let i=start;i<=end;i++)
    {
        if(i%3==0 && i%5==0)
        {
             array.push("FIZZBUZZ")
        }
        else if(i%5==0)
        {
            array.push("BUZZ");
        }
        else if(i%3==0)
        {
            array.push("FIZZ");
        }
        else
        {
            array.push(i);
        }
    }
    console.log(array);
}
 
fizzBuzz(1, 15);