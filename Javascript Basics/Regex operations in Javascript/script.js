// const regex= /freeCodeCamp/
// const match = "I love freeCodeCamp like crazy".match(regex)
// console.log("FREECODECAMP".match(regex))
// console.log(match)

const regex= /freecodecamp/
const str= "freecodecamp is rly kewl"
var replaced= str.replace(regex, "freeCodeCamp")
console.log(replaced)
replaced = replaced.replace(/rly/, "really")
replaced = replaced.replace(/kewl/, "cool")

console.log(replaced)