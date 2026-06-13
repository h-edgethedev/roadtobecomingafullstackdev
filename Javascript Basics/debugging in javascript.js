// function validateNumber(input){
//     if(typeof input !== "number"){
//         throw new TypeError(`Expected a number, but received ${typeof input}`)
//     }

//     console.log(input*2)
// }

// validateNumber(85)

function processInput(input){
    if (typeof(input)!== "string"){
        throw new TypeError("Input must be a string!")
    }

    return input.toUpperCase()
}

try{
    console.log("Starting to process input...")
    const result= processInput("Heritage")
    console.log(`Processed result: ${result}`)
}

catch(error){
    console.error("Error Occurred: ", error.message)
}

// let firstNumber = 5;
// let secondNumber = 10;
// debugger; // Code execution pauses here
// let sum = firstNumber + secondNumber;
// console.log(sum);

function calculateTotalPrice(price, discountPercentage) {
 debugger
 let discountAmount = (price * discountPercentage) / 100
 let totalPrice = price - discountAmount

 console.log(`Original Price: ${price}`)
 console.log(`Discount Amount: ${discountAmount}`)
 console.log(`Total Price after Discount: ${totalPrice}`)

 return totalPrice
}


let price = 100
let discount = 15

let finalPrice = calculateTotalPrice(price, "discount")
console.log(`Final Price: ${finalPrice}`);