// const now = new Date();
// console.log(now);

const specificDate = new Date("June 21, 2007 12:00:00")
console.log(specificDate)

const now = new Date()
const date = now.getDate()
console.log(date)

console.log(now.getMonth())
console.log(`Year: ${now.getUTCFullYear()}`)

console.log(Date.now())

console.log(now)
console.log(now.toISOString())
const options= {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}
console.log(now.toLocaleDateString("en-GB", options))