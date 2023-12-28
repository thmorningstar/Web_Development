console.log("Business Name Generator");

/*
Adjectives:
Crazy;
Amazing;
Fire;

Shop Names: 
Engine;
Food;
Garments;

Another Names:
Bros;
Limited;
Hub;
*/

let first,second,third

// divided into 3 equal intervals(0 0.33 0.66 1)

//Generate First Word
let random = Math.random()
if(random<0.33)
{
    first = "Crazy";
}

else if(random >= 0.33 && random < 0.66)
{
    first = "Amazing";
}

else
{
    first = "Fire";
}
//Generate Second Word
random = Math.random()
if(random<0.33)
{
    second = "Engine";
}

else if(random >= 0.33 && random < 0.66)
{
    second = "Foods";
}

else
{
    second = "Garments";
}

//Generate Third Word 
random = Math.random()
if(random<0.33)
{
    third = "Bro";
}

else if(random >= 0.33 && random < 0.66)
{
    third = "Limited";
}

else
{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);

