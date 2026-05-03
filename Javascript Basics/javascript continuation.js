// console.log(parseFloat('109.38abd 3.14abc'))
// console.log(parseInt("123.308aoije38.439"))
// let num= 12.389302
// console.log(num.toFixed(2))
// let num1= 12.345
// let num2= 67.891
// console.log((num1+num2).toFixed(2))
// console.log(34==="34")

// let age= "Heritage";
// if (age>18){
//     console.log("User is an adult")
// }

// else if(age<0){
//     console.log("Age is invalid, Negative integer")
// }

// else{
//     console.log("Just fuck off")
// }

// let dayofweek= 3

// switch(dayofweek){
//     case 1:
//         console.log("It's Monday, time to start working");
//         break;
//     case 2:
//         console.log("It's Tuesday, Let's keep pushing through the week")
//         break;
//     case 3:
//         console.log("It's Wednesday, one of my best days of the week");
//         break;
//     case 4:
//         console.log("It's thursday, almost at the weekend just one more day to go")
// }
// let name= "Heritage";

// console.log(`My ${name} is Heritage and I'll love to become an AI\\ML developer`)

// function name_greet(name= "Heritage"){
//     console.log(`Hii, my name is ${name}`)
// }

// name_greet()
// name_greet("Fikayo")

// const sum = function(num1, num2){
//     return(num1+num2);
// }

// let sum2numbers= sum(12, 39)
// console.log(sum2numbers)

// const calculateArea = (width, height) =>{
//     return area= width*height;
// }

// let area_rectangle= calculateArea(12, 38)
// console.log(area_rectangle) 
// let globalvar= "my name is Heritage";
// function myfunction(){
//     console.log(globalvar)
// }

// myfunction()

// let x= 20;

// function printX(){
//     let x= 10;
//     console.log(x)
// }
// printX()
// console.log(x)
// //Building my calulator
// function calculateSum(num1, num2) {
//     return num1+num2
// }

// console.log(calculateSum(2,5))
// console.log(calculateSum(10,10))
// function calculateDifference(num1, num2){
//     return num1-num2
// }
// console.log(calculateDifference(22, 5))
// console.log(calculateDifference(12,1))
// console.log(calculateDifference(17, 9))

// function calculateProduct(num1, num2){
//     return num1*num2
// }

// console.log(calculateProduct(13, 5))

// function calculateQuotient(num1, num2){
    
//     if (num1 ===0 || num2===0){
//         return "Error Division by zero"
//     }
//     else{
//         return num1/num2
//     }
// }
// console.log(calculateQuotient(3, 0))

// function calculateSquare(num){
//     return Math.pow(num,2)
// }

// console.log(calculateSquare(2))
// console.log(calculateSquare(9))

// function calculateSquareRoot(num){
//    return Math.sqrt(num)
// }

// console.log(calculateSquareRoot(25))
// console.log(calculateSquareRoot(100))

// function booWho(bool){
//     if (typeof(bool)===typeof(true)){
//         return true;
//     }
//     else{
//         return false
//     }
// }

// console.log(booWho(true))

// function maskEmail(email){
//     let emails= String(email)
//     let domain_index= emails.indexOf("@")
//     let domain_name= emails.slice(domain_index)
//     let numOfAsterisk= emails.length-(domain_name.length+2)
//     let first_char= emails[0];
//     let last_char= emails[domain_index-1]
//     let maskedEmail= `${first_char}${"*".repeat(numOfAsterisk)}${last_char}${domain_name}`
//     return maskedEmail
// }

// let myemail= "oluwanifemibarber@gmail.com"
// console.log(myemail.indexOf("@"))
// console.log(maskEmail(myemail))

// let minIncomeForDuplex= 60000
// let minCreditScoreForDuplex = 700
// var minIncomeForCondo= 45000
// var minCreditScoreForCondo= 680
// var minIncomeForCar= 30000
// var minCreditScoreForCar= 650

// function getLoanMessage(annualIncome, creditScore){
// if (annualIncome>=minIncomeForDuplex && creditScore>=minCreditScoreForDuplex){
//     return "You qualify for a duplex, condo and a car loan."
// }
// else if(annualIncome>=minIncomeForCondo && creditScore>=minCreditScoreForCondo){
//     return "You qualify for a condo and car loan."
// }
// else if(annualIncome>= minIncomeForCar && creditScore>=minCreditScoreForCar){
//     return "You qualify for a car loan."
// }
// else{
//     return "You don't qualify for any loans."
// }
// }

// var duplexLoanMsg= getLoanMessage(85000, 850)
// var condoLoanMsg= getLoanMessage(65000, 690)
// var carLoanMsg= getLoanMessage(45000, 660)
// var noLoanMsg= getLoanMessage(25000, 550)
// console.log(duplexLoanMsg)
// console.log(condoLoanMsg)
// console.log(carLoanMsg)
// console.log( noLoanMsg)

// function convertCtoF(temperature){
//     var farenheit= temperature *(9/5) +32
//     return farenheit
// }

let count= 0

function cardCounter(param){
    if (param===2 || param===3 || param===4 || param===5 || param===6){
        count++;
    }
    else if(param=="J" || param=="Q" || param=="K" || param=="A" || param== 10){
        count--
    }
    if(count>=1){
        return `${count} Bet`
    }
    else{
        return `${count} Hold`
    }
}
cardCounter(2)
cardCounter(2)
console.log(cardCounter(10))