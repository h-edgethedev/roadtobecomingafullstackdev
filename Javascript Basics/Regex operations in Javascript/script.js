// const regex= /freeCodeCamp/
// const match = "I love freeCodeCamp like crazy".match(regex)
// console.log("FREECODECAMP".match(regex))
// console.log(match)

// var regex = /freecodecamp/
// const str = "freecodecamp is rly kewl"
// var replaced = str.replace(regex, "freeCodeCamp")
// console.log(replaced)
// replaced = replaced.replace(/rly/, "really")
// replaced = replaced.replace(/kewl/, "cool")

// console.log(replaced) 

// regex= /frEecodecamp/gi

var start = /^freecodecamp/i;
var end = /freeCodeCamp$/i

// console.log(start.test("freecodecamp"))
// console.log(end.test("I love freecodecamp"))

// start = /^freecodecamp/im
// end = /freecodecamp$/im

// const string = `I really love freecodecamp it's my favorite`
// const sentence = `I really love 
// freecodecamp
// Its the best`
// console.log(end.test(string))
// console.log(start.test(string))
// console.log(end.test(sentence))
// console.log(start.test(sentence))

// var regex= /freecodecamp/i
// var string = "we love freecodecamp isn't freecodecamp great?";
// console.log(string.match(regex))

// // regex= /🍎/u

// // string= "I have an apple 🍎"
// // console.log(regex.test(string))
// // console.log(/🍎/.test(string))

// console.log(regex.test("We love Freecodecamping"))

// var regex = /freecodecamp/g
// var pattern= "freecodecamp"
// var str = "freecodecamp is the best we love freecodecamp"
// var match = str.match(regex)
// var replaced = str.replace(regex, "FreeCodeCamp")
// console.log(match)
// console.log(replaced)
// const matched= str.matchAll(pattern)
// const replaced= str.replaceAll(pattern, "FreeCodeCamp")
// console.log(replaced)
// console.log(Array.from(matched))

// var regex = /free(?!code)/i
// console.log(regex.test("freeCodeCamp"))
// console.log(regex.test("free code camp"))
// console.log(regex.test("I need someone for free to write code for me"))

// regex= /(?<!free)code/i
// console.log(regex.test("freeCodeCamp"))
// console.log(regex.test("free code camp"))
// console.log(regex.test("I need someone for free to write code for me"))
// const regex = /free(?!code)/i;
// console.log("freeCodeCamp".match(regex)); // null
// console.log("free code camp".match(regex)); // ['code', index: 5, input: 'free code camp', groups: undefined]
// console.log(
//   "I need someone for free to write code for me".match(regex)
// ); // ['code', index: 33, input: 'I need someone for free to write code for me', groups: undefined]

// var regex = /^\d\d\d\d$/
// regex = /^[a-zA-Z]+\d{4,6}$/
// console.log('b123456'.match(regex))
// console.log("d12345".match(regex))
// console.log("aaa12345".match(regex))
// console.log("12345".match(regex))

var regex= /free(co+de)camp/i
// console.log("freecodecamp".match(regex))
// console.log("freecooooooooooooooooodecamp".replace(regex, "paid$1world"))

regex= /free(co+de)camp.*free(co+de)camp/i
