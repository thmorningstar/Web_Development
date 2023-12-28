console.log("Faulty Calculator");

let random = Math.random();
let num1 = prompt("Enter the 1st number")
let opr = prompt("Enter the operator")
let num2 = prompt("Enter the 2nd number")

let obj=
{
    "+" : "-",
    "-" : "/",
    "*" : "+",
    "/" : "**",
}

console.log(random);
if(random>0.1)
// Perform corrct ccalculation
{
    console.log(`The result is ${num1} ${opr} ${num2}`)
    alert(`The result is ${eval(`${num1} ${opr} ${num2}`)}`)
}

else
//Perform wrong calculation
{
    opr = obj[opr];
    alert(`The result is ${eval(`${num1} ${opr} ${num2}`)}`)

}
