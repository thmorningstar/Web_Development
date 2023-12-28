//Form new Array using the given array
let arry=[2, 10, 15, 25, 6];
let newArry=[];

// for (let index = 0; index < arry.length; index++) {
//     const element = arry[index];
//     newArry.push(element**2);
// }

// console.log(newArry);

//Alternative way to do (By using Mapping)

newArry = arry.map((element) =>{
    return element**2;
})

console.log(newArry);

//Use of Filter function
const greaterThanSeven = (e) =>
{
    if(e>7)
    {
        return true;
    }
    return false;
}

console.log(arry.filter(greaterThanSeven));

//Alternative way
// console.log(arry.filter((e) =>
// {
//     if(e>7)
//     {
//         return true;
//     }
//     return false;
// }));

let arry2 = [1,2,3,4,5,6];

const red = (a,b)=>
{
    return a*b;
}

console.log(arry2.reduce(red));