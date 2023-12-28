//Calculate Factorial...(Using Loop)

// let num = 6;

// let array = [];                     // Array formation of a given number

// for (let index = 1; index <= num; index++) {
//     array.push(index);   
// }

// console.log(array);

// const read = (a,b)=>
// {
//     return a*b;
// }

// console.log("Factorial of the given number is ", array.reduce(read) );


//Alternative method(Factorial Using Reduce)

let num=6;

function factorial(number)
{
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,));
    let fact= arr.slice(1,).reduce((a,b)=>
    {
        return a*b;
    })
    // return fact;
    console.log(fact);
}

factorial(num);



