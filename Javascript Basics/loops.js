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

function factorialCalculator(number) {
    var result= 1;
    for (var i= 1; i<=number; i++){
        result*=i
    }
    return result
}
var num= 5
var factorial= factorialCalculator(num)
var resultMsg= `Factorial of ${num} is ${factorial}`
console.log(resultMsg)

const greetingObject = new String("Hello, World!");
console.log(greetingObject.length)
const person = {
  name: "John",
  age: 30,
  isStudent: true
};

console.log(person.toString());

const fixedLengthArray= Array.from({length: 5})
console.log(fixedLengthArray)
var arrayOfSomeSort= new Array(5)
console.log(arrayOfSomeSort)