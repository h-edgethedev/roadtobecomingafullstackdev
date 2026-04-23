//document.getElementById("demo").innerHTML="My First Javascript file"

// function myfunction(){
//     document.getElementById("demo").innerHTML = "Paragraph changed."
// }

// document.getElementById("demo").innerHTML= "<h2>Hello Worlds</h2>"

// document.write(5+6)
// console.log(5+8)
// var age= 5
// var x= 6
// var total = x + age
// var string= "Heritage"
// document.write(total," ", string)

// document.getElementById("demo").innerText= "Hello Dolly"

function transform() {
    document.getElementById("demo").innerText= "This block of code was changed"
    document.getElementById("randtext").innerHTML= "<h1>Beside Javascript Python na less</h1>"
}

function transform_back(){
    document.getElementById("randtext").innerHTML= "<p>Javascript na less beside Python</p>"
}

// let stringquotes = "My name is Heritage";
// console.log(stringquotes)

// let name = "Heritage";
// let middle= "Oluwanifemi";
// let lastname= "Barber";
// let fullname= name + " "+ middle + " "+lastname
// console.log(fullname)
// let datatype= null
// document.write(typeof datatype)

// const cryptickey1= Symbol("saltNpepper");
// const cryptickey2= Symbol("saltNpepper");
// console.log(cryptickey1===cryptickey2)

// let words= "Heritage"
// let first_two= words[0]+words[words.length -1]
// console.log(first_two)
// console.log("Roses are red, \nviolets are blue, \nJavascript is fun and so are you");
// console.log(`My name is ${name} and I attend the University of Lagos`);
// console.log(`Roses are red,
//     Violets are blue
//     Javascript is fun and so are you😊`)
// var score= 9.5
// var highest_score= 10
// song= "Ordinary by Alex Warren"
// const output= `One of my favorite songs is ${song}, I rated it ${(score/highest_score)*100}%.`
// console.log(output)

// var statement= "Javascript is an awesome programming Language, Javascript is also powerful";
// var position= statement.indexOf("awesome")
// console.log(position)   
// var jsPosition= statement.indexOf("Javascript", 17)
// console.log(jsPosition)

// const firstName= "Heritage"
// const lastName= "Barber"
// const age= 18;
// const favoriteLanguage= "Python";
// const hobby= "Coding";
// const initials= `${firstName[0]}.${lastName[0]}`;
// var output= `My name is ${firstName.toUpperCase()} ${lastName.toUpperCase()}, initials: ${initials}
// I'm ${age}yrs old.
// I love coding with ${favoriteLanguage}`
// console.log(output)

// const btn= document.getElementById("my-button")
// const output = document.getElementById("output");
// btn.addEventListener("click", () => {
//   const userName = prompt("What is your name?", "Guest");
//   output.textContent = "Hello, " + userName + "!";
// });

// let letter= "American bitch"
// console.log(letter.charCodeAt(2))
// let char= String.fromCharCode(3)
// console.log(char)

// let phrase= "Javascript is awesome"
// let result= phrase.includes("awesome");
// console.log(result);
// let sliced_word= phrase.slice(-7);
// console.log(sliced_word)

// let sentence = "Learning JavaScript is fun!";
// let extracted = sentence.slice(9, -5);

// console.log(extracted);

// const fccSentence = "freeCodeCamp is a great place to learn web development.";

// console.log("Here are some examples of the includes() method:");

// let hasFreeCodeCamp= fccSentence.includes("freeCodeCamp")
// console.log(hasFreeCodeCamp)
// console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`)
// let hasJavaScript= fccSentence.includes("JavaScript");
// console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`)

// let greeting= "     Hello    World  ";
// console.log(greeting)
// greeting= greeting.toUpperCase()
// console.log(greeting);
// let trimmedMessage = greeting.trim();
// console.log(trimmedMessage)

// let newText= trimmedMessage.replace("WORLD", "JavaScript");
// console.log(newText);

// let phrase = "freeCodeCamp is awesome!";
// let updatedPhrase = phrase.replace("freecodecamp", "fCC");

// console.log("*".repeat(0));
// const infiniteNumber = 1 / 0;
// console.log(infiniteNumber); // Infinity
// console.log(typeof infiniteNumber);

// let truthyOrFalsy = true;

// console.log(Boolean(truthyOrFalsy));
// truthyOrFalsy= "freeCodeCamp";
// console.log(truthyOrFalsy);

// truthyOrFalsy= ""
// console.log(Boolean(truthyOrFalsy))

// let hasDeveloperJob= true;

// if (hasDeveloperJob) {
//     console.log("Timmy is employed as a developer.")
// }

// let isTimmyAGamer= false
// if (isTimmyAGamer) {
//     console.log("Timmy loves to play World of Warcraft.");
// }

// const timmyAge = 15;
// if (timmyAge>=16) {
//     console.log("Timmy is old enough to drive.");
// }
// else{
//     console.log("Timmy is not old enough to drive.");
// }

// const str= "42";
// const strtonum= +str;

// console.log(strtonum);
// console.log(typeof strtonum)

// let a = 5;  // Binary: 101
// let b = 3;  // Binary: 011
// console.log(a & b);

// let x = 8;  // Binary: 1000
// console.log(x << 2);

// if(null){
//     console.log("Thisn will not run");
// }

// if ("freeCodeCamp"){
//     console.log("This is so gonna run");
// }

// const userSettings= {
//     theme: null,
//     volume: 0,
//     notifications: false
// };

// let theme= userSettings.theme ?? "light"
// console.log(theme);

// let max= 100
// let min= 12

// const randomNum= Math.floor(Math.random()*(max-min+1))+min
// console.log(randomNum)

let fortune1= "Your cat will look very cuddly today."
let fortune2= "The weather will be nice tomorrow."
let fortune3= "Be cautious of your new neighbors."; 
let fortune4= "You will find a new hobby soon.";
let fortune5= "It would be wise to avoid the color red today.";
let max=5, min= 1;

let randomNum= Math.floor(Math.random()*(max-min+1))+min
let selectedfortune;
if (randomNum==1) {
    selectedfortune= fortune1
}

else if(randomNum== 2){
    selectedfortune= fortune2;
}

else if(randomNum== 3){
    selectedfortune= fortune3
}

else if(randomNum== 4){
    selectedfortune= fortune4
}

else if (randomNum== 5) {
    selectedfortune= fortune5;
}

console.log(selectedfortune);