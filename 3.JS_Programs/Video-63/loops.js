let arry=[1, 9, 17, 3, 14]

for (let index = 0; index < arry.length; index++) {
    const element = arry[index];
    console.log(element);

}

//for each Loop
arry.forEach((value, index, array) =>{
    console.log(value, index, array);
})

let obj={
    a:1,
    b:2,
    c:3,
}

//for in Loop
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
    }
}

//For of Loop
for (const iterator of arry) {
  console.log(iterator);  
}
