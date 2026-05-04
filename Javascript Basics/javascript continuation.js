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

// let count= 0
// function cardCounter(param){
//     if (param===2 || param===3 || param===4 || param===5 || param===6){
//         count++;
//     }
//     else if(param=="J" || param=="Q" || param=="K" || param=="A" || param== 10){
//         count--
//     }
//     if(count>=1){
//         return `${count} Bet`
//     }
//     else{
//         return `${count} Hold`
//     }
// }
// cardCounter(2)
// cardCounter(2)
// console.log(cardCounter(10))
// var year= 2024
// function isLeapYear(param){
//     var year = param
//     if((year%4== 0 && year%100!=0) || year%400==0){
//         return `${year} is a leap year.`
//     }
//     else{
//         return `${year} is not a leap year.`
//     }
// }

// var result= isLeapYear(year)
// console.log(result)

var name = "HeritageOluwanifemiBarber"
// function truncateString(string, number){
//     var lengthOfString= string.length
//     if (lengthOfString<=number){
//         return string
//     }
//     else{
//         return`${string.slice(0, number)}...`
//     }
// }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

// function confirmEnding(string1, string2){
//     if(string1.slice(-string2.length)===string2){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(confirmEnding("Bastian", "n"))

// // Arrays

// var array = ["mango", "cherry", "watermelon"]
// array[1] = "banana"
// console.log(array)
// array.push("Strawberry")
// array.push("orange")
// console.log(array)

// console.log(array.pop(0))
// console.log(array.unshift("Blueberry"))
// array.push("pawpaw")
// array.push("pineapple")
// array.push("Agbalumo")
// console.log(array)

// var [first, second, third, ...rest]= array
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(rest)

// var name= "BarberHeritageOluwanifemi"
// var charArray= name.split("")
// var reversedArray= charArray.reverse()
// let reversedName= reversedArray.join("")
// console.log(reversedName)

// console.log("Grocery Shopping List")

// var shoppingList= []
// console.log("It will be nice to have some fruit to eat.")
// shoppingList.push("Apples")
// function getShoppingListMsg(array){
//     return `Current Shopping List: ${array.join(", ")}`
// }

// console.log(getShoppingListMsg(shoppingList))
// shoppingList.push("Grapes")
// console.log(getShoppingListMsg(shoppingList))
// console.log("It looks like we need to get some cooking oil.")
// shoppingList.unshift("Vegetable Oil")
// console.log(getShoppingListMsg(shoppingList))
// shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips")
// console.log(getShoppingListMsg(shoppingList))
// console.log("This looks like too much junk food.")
// shoppingList.pop()
// console.log(getShoppingListMsg(shoppingList))
// console.log("It might be nice to get a dessert.")
// shoppingList.unshift("Chocolate Cake")
// console.log(getShoppingListMsg(shoppingList))
// console.log("On second thought, maybe we should be more health conscious.")
// shoppingList.shift()
// shoppingList[0]= "Canola Oil"
// console.log(getShoppingListMsg(shoppingList))

var lunches= []
function addLunchToEnd(array, lunchItem){
    array.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`)
    return array;
}

addLunchToEnd(lunches, "Fried rice")
console.log(lunches)

function addLunchToStart(array, lunchItem){
    array.unshift(lunchItem)
    console.log(`${lunchItem} added to the start of the lunch menu.`)
    return array
}

function removeLastLunch(array){
    if (array.length > 0){
        var lastLunchItem= array[array.length-1]
        array.pop()
        console.log(`${lastLunchItem} removed from the end of the lunch menu.`)
        return array
    }
    else{
        console.log(`No lunches to remove`)
        return array
    }
}
function removeFirstLunch(array){
    if(array.length>0){
        var firstItem= array[0]
        array.shift()
        console.log(`${firstItem} removed from the start of the lunch menu.`)
        return array
    }
    else{
        console.log(`No lunches to remove.`)
    }
}
function getRandomLunch(array){
    var numItems= array.length
    if (numItems>0){
            var randIndex= Math.floor(Math.random()*numItems)
            console.log(`Randomly selected lunch: ${array[randIndex]}`)
    }
    else{
        console.log("No lunches available.")
    }
}

function showLunchMenu(array){
    if (array.length>0){
        console.log(`Menu items: ${array.join(", ")}`)
    }
    else{
        console.log(`The menu is empty.`)
    }
}

addLunchToEnd(lunches,"Hamburger")
addLunchToStart(lunches,"Sausages")
addLunchToEnd(lunches, "Indomie")
addLunchToEnd(lunches, "Sushi")
addLunchToEnd(lunches, "Pizza")
addLunchToEnd(lunches, "Suya")
addLunchToEnd(lunches, "Garri")
removeLastLunch(lunches)
showLunchMenu(lunches)

lunches.splice()