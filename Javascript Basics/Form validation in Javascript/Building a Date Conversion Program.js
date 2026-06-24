const currentDate = new Date()
var currentDateFormat = `Current Date and Time: ${currentDate}`
console.log(currentDateFormat)

function formatDateMMDDYYYY(date) {
    var dateObj = new Date(date)
    return `Formatted Date (MM/DD/YYYY): ${dateObj.toLocaleDateString()}`
}

console.log(formatDateMMDDYYYY("Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time)"))

function formatDateLong(date) {
    const options = {
        month: "long",
        day: "numeric",
        year: "numeric",
    };
    const dateObj = new Date(date)
    return `Formatted Date (Month Day, Year): ${dateObj.toLocaleDateString("en-US", options)}`
}

console.log(formatDateLong("Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time)"))