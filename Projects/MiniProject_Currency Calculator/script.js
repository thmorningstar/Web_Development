// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";


// const drop = document.querySelectorAll(".dropdowns select");
// const btn = document.querySelector("button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const newMsg = document.querySelector(".msg p");

// for (let select of drop) {
//     for (let currCode in countryList) {
//         let newSelect = document.createElement("option");
//         newSelect.innerText = currCode;
//         newSelect.value = currCode;

//         // Set default selection for "From" and "To" dropdowns
//         if (select.name === "From" && currCode === "INR") {
//             newSelect.selected = true;  // Set the "From" select to default "INR"
//         } else if (select.name === "To" && currCode === "USD") {
//             newSelect.selected = true;  // Set the "To" select to default "USD"
//         }

//         select.append(newSelect);
//     }

//     select.addEventListener("change", (evt)=>{
//         updateFlag(evt.target);
//     })
// }

// const updateFlag = (element)=>{
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let imgg = element.parentElement.parentElement.querySelector("img");
//     imgg.src = newSrc;

// }

// btn.addEventListener("click", async (evt) => {
//     evt.preventDefault();
//     let amount = document.querySelector(".amount input");
//     let amtVal = amount.value;
//     if (amtVal === "" || amtVal < 1) {
//       amtVal = 1;
//       amount.value = "1";
//     }

//     const URL = `${BASE_URL}/${toCurr.value.toLowerCase()}.json`;
//     let response = await fetch(URL);
//     let data = await response.json();
//     console.log(data);
//     let rate = data[toCurr.value.toLowerCase()][fromCurr.value.toLowerCase()]; //nested object
//     let finalAmount = amtVal * rate;
//     console.log(finalAmount);
//     newMsg.textContent = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  
//   });

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const drop = document.querySelectorAll(".dropdowns select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const newMsg = document.querySelector(".msg p");
const newAmount = document.querySelector("#exchangedAmount input");

// Populate dropdowns and set default selections
for (let select of drop) {
    for (let currCode in countryList) {
        let newSelect = document.createElement("option");
        newSelect.innerText = currCode;
        newSelect.value = currCode;

        // Set default selection for "From" and "To" dropdowns
        if (select.name === "From" && currCode === "INR") {
            newSelect.selected = true;  // Set the "From" select to default "INR"
        } else if (select.name === "To" && currCode === "USD") {
            newSelect.selected = true;  // Set the "To" select to default "USD"
        }

        select.append(newSelect);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
        // Update base value when currency changes
        updateBaseRate();
    });
}

// Function to update the flag based on selected currency
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let imgg = element.parentElement.parentElement.querySelector("img");
    imgg.src = newSrc;
}

// Function to update the base rate message
const updateBaseRate = async () => {
    const selectedFrom = fromCurr.value;
    const selectedTo = toCurr.value;

    const URL = `${BASE_URL}/${selectedTo.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    
    // Get the rate between selected currencies
    let rate = data[selectedTo.toLowerCase()][selectedFrom.toLowerCase()]; 
    newMsg.textContent = `1 ${selectedFrom} = ${rate} ${selectedTo}`; // Update message with base rate
}

// Call updateBaseRate once on initial load to display default rates
updateBaseRate();

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()][fromCurr.value.toLowerCase()]; // Get the exchange rate
    let finalAmount = amtVal * rate;
    // newMsg.textContent = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`; // Update exchanged amount message
    newAmount.value = `${finalAmount}`; // Update exchanged amount message
});