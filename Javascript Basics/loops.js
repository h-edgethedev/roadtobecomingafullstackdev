// // Using brute force for passwords
// var pin= 694293
// for (let i=0; i<1000000; i++){
//     if(pin== i){
//         console.log("Password cracked: ", i);
//         break;
//     }
// }

// const array= [23, 83, 17, 19, 84, 29, 37, 48, 27, 47, 55, 59, 57]
// var temp
// for (let i=0; i<array.length-1; i++){
//     for (let j= i+1; j<array.length; j++){
//         if(array[i]>array[j]){
//             temp= array[i]
//             array[i]= array[j]
//             array[j]= temp
//         }
//     }
// }
// console.log(array)
// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 25 },
//   { name: 'Jim', age: 40 }
// ];

// for (let person of people){
//     console.log(`${person.name} is ${person.age} years old`)
// }

// const person = {
//   name: 'John',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'Anytown',
//     state: 'CA'
//   }
// };

// for (const prop in person){
//     console.log(person[prop]) 
// }

// function printCharacters(str) {
//     for (const alphabet of str) {
//         console.log(alphabet)
//     }
// }

// // printCharacters("hello")

// function getMatchedWordCount(sentence, match) {
//     let count = 0
//     for (var word of sentence){
//         console.log(`Checking "${word}" against "${match}" | Running count: ${count}`)
//         if(word===match){
//             count++;
//         }
//     }
//     return count
// }
// console.log(getMatchedWordCount(["I", "really", "really", "really", "like", "to", "code"], "really"))

// console.log(getMatchedWordCount(["Do", "not", "fear", "the", "dandy", "lion"], "dandy"))

// function findLongestWordLength(string) {
//     var stringArray = string.split(" ")
//     var lenLongestword = stringArray[0].length
//     var longestWord = stringArray[0]
//     for (var word of stringArray) {
//         if (lenLongestword < word.length) {
//             longestWord = word
//             lenLongestword = word.length
//         }
//     }
//     return lenLongestword
// }

// console.log(findLongestWordLength("Google do a barrel roll"))

// function factorialCalculator(number) {
//     var result = 1;
//     for (var i = 1; i <= number; i++) {
//         result *= i
//     }
//     return result
// }
// var num = 5
// var factorial = factorialCalculator(num)
// var resultMsg = `Factorial of ${num} is ${factorial}`
// console.log(resultMsg)

// const greetingObject = new String("Hello, World!");
// console.log(greetingObject.length)
// const person = {
//     name: "John",
//     age: 30,
//     isStudent: true
// };

// console.log(person.toString());

// const fixedLengthArray = Array.from({ length: 5 })
// console.log(fixedLengthArray)
// var arrayOfSomeSort = new Array(5)
// console.log(arrayOfSomeSort)

// function doSomething(x) {
//     return x + z
// }

// let number = [1, 2, 3, 4, 5]

// number.forEach(function (number) {
//     console.log(number * 2)
// })

// function multiplyBy(factor) {
//     return function (number) {
//         console.log(number)
//         console.log(number * factor)
//     }
// }
// let double = multiplyBy(2);
// double(8)

// const numbers= [1,2,3,4,5]
// const doubled = numbers.map((numbers)=> numbers*2)

// console.log(doubled)

// const numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
//     console.log("Element:", element);
//     console.log("Index:", index);
//     console.log("Array:", array);
//     return element * 2;
// });

// console.log(numbers)

// const filterNumbers= [2, 3, 4, 5, 6, 7].filter((num)=> num > 2)

// console.log(filterNumbers)

// const developers = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "David", age: 25 }
// ];

// const youngPeople= developers.filter((person) => person.age <30)
// console.log(youngPeople)

// const numbers= [1,2,3,4,5,6,7]

// const sum= numbers.reduce((accumulator, currentValue) => accumulator+currentValue, 0);
// console.log(sum)

// const result = " Hello, World! "
//     .trim()
//     .toLowerCase()
//     .replace("world", "Nigeria")

// console.log(result)

// const transactions = [
//     { amount: 100, type: "credit" },
//     { amount: 20, type: "cash" },
//     { amount: 150, type: "credit" },
//     { amount: 50, type: "cash" },
//     { amount: 75, type: "credit" }
// ];

// const totalCreditWithBonus = transactions
//     .filter((transactions) => transactions.type === "credit")
//     .map((transactions) => transactions.amount * 1.1)
//     .reduce((sum, amount) => sum + amount, 0)

// console.log(totalCreditWithBonus)
// let obj = {
//     value: 1,
//     increment: function () {
//         this.value++;
//         return this;
//     },
//     double: function () {
//         this.value *= 2;
//         return this;
//     },
//     getValue: function () {
//         return this.value;
//     }
// };

// let result = obj.increment().double().increment().getValue();
// console.log(result); 

// const fruits = ["Banana", "Grape", "Cucumber", "Orange", "Apple", "Eggplant"]

// fruits.sort()
// console.log(fruits)

// const numbers = [414, 200, 5, 10, 3];

// numbers.sort((a,b)=> a-b);

// console.log(numbers)

const numbers = [2, 4, 6, 1, 8, 10];
const hasAllEvenNumbers = numbers.some((num) => num % 2 !== 0);

console.log(hasAllEvenNumbers); // true

var books = [
    {
        title: "Irawo",
        authorName: "Justice Crack",
        releaseYear: 2012
    },
    {
        title: "Half of a yellow sun",
        authorName: "Chimamanda Adichie",
        releaseYear: 2010
    },
    {
        title: "Things fall Apart",
        authorName: "Chinua Achebe",
        releaseYear: 2017
    },
    {
        title: "Barber Beatrice",
        authorName: "Contemporary Aid",
        releaseYear: 1943,
    },
    {
        title: "Dr. D.K Olukoya",
        authorName: "The mystery of the blood",
        releaseYear: 1927,
    },
]

function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear) {
        return -1
    }
    else if (book1.releaseYear > book2.releaseYear) {
        return 1
    }
    else if  (book1.releaseYear == book2.releaseYear){
        0
    }
}

const filteredBooks = books.filter((books) => books.releaseYear < 1950)
// console.log(filteredBooks)

filteredBooks.sort(sortByYear)

console.log(filteredBooks)

