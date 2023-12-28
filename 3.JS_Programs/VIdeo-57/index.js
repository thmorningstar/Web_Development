console.log("Iam tuturial on Loops");

let a=0;

// console.log(a);
// console.log(a+1);
// console.log(a+2);
// console.log(a+3);

//for-Loop
for (let i = 0; i <= 50; i++) 
{
    console.log(a+i);    
}

let obj=
{
    Name: "Suraj",
    Course: "BCA",
    Semester: "1st"
}
// for-in Loop(used for objects)
for (const key in obj) 
{
    // const element=obj[key];
    // console.log(key, element);

    console.log(key);
}

// for-Of Loop(used for array)
for (const c of "suraj") 
{
    console.log(c);    
}


let i=0;
// While loop
while (i<6) 
{
    console.log(i);
    i++;
}

// Do While Loop
let num=0;

do 
{
    console.log(num);
    num++;
} while (num<10);

