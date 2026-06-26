var startButton = document.getElementById("startBtn")
var endButton = document.getElementById("endBtn")
var startTimeElement = document.getElementById("startTime")
var statusIndicator = document.getElementById("statusIndicator")
var endTimeElement = document.getElementById("endTime")
var startTime = 0;
var sessionActive = false
var calcStartTime = 0
var endTime = 0;
var calcEndTime = 0



startButton.addEventListener("click", () => {
    var currentTime = new Date()
    startTime = currentTime.toLocaleTimeString()
    startTimeElement.textContent = startTime
    calcStartTime = new Date()
    statusIndicator.classList.add("active")
    startButton.disabled = true
    endTimeElement.textContent = "—"
    endButton.disabled = false
})


function calculateDuration() {
    var timeDifference = calcEndTime - calcStartTime
    var totalSeconds = timeDifference / 1000
    var hrs = Math.floor(totalSeconds / 3600)
    var leftovers = totalSeconds % 3600
    var minutes = Math.floor(leftovers / 60)
    seconds = leftovers % 60
    return `${hrs}hr ${minutes}m ${seconds}s`
}


endButton.addEventListener("click", () => {
    var currentTime = new Date()
    endTime = currentTime.toLocaleTimeString()
    endTimeElement.textContent = endTime
    endButton.disabled = true
    startButton.disabled = false
    statusIndicator.classList.remove("active")
    calcEndTime = new Date()
    var duration = calculateDuration()
    var date = currentTime.toLocaleDateString()
    var entry = document.createElement("div")
    entry.classList.add("session-entry")

    entry.innerHTML = `
            <div class="session-left">
        <div class="session-date">${date}</div>
        <div class="session-times">${startTime} – ${endTime}</div>
    </div>
    <div class="session-duration">${duration}</div>
        `
    document.getElementById("historyList").prepend(entry)
    console.log(calcEndTime - calcStartTime)
})


