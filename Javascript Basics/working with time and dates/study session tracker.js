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
var statusLabel = document.getElementById("statusLabel")
var liveClock = document.getElementById("liveClock")

var timerInterval;


startButton.addEventListener("click", () => {
    var currentTime = new Date()
    startTime = currentTime.toLocaleTimeString()
    startTimeElement.textContent = startTime
    calcStartTime = new Date()
    statusIndicator.classList.add("active")
    startButton.disabled = true
    endTimeElement.textContent = "—"
    endButton.disabled = false
    statusLabel.textContent = "Session in Progress"

    timerInterval = setInterval(() => {
        var newTime = new Date()
        var timeDifference = newTime - calcStartTime
        var totalSeconds = timeDifference / 1000
        var hrs = Math.floor(totalSeconds / 3600)
        var leftovers = totalSeconds % 3600
        var minutes = Math.floor(leftovers / 60)
        var seconds = Math.floor(leftovers % 60)
        liveClock.textContent = `${hrs}: ${minutes}:${seconds}`
    }, 1000)
})


function calculateDuration(startIme, Endtime) {
    var timeDifference = Endtime - startIme
    var totalSeconds = timeDifference / 1000
    var hrs = Math.floor(totalSeconds / 3600)
    var leftovers = totalSeconds % 3600
    var minutes = Math.floor(leftovers / 60)
    var seconds = Math.floor(leftovers % 60)
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
    var duration = calculateDuration(calcStartTime, calcEndTime)
    var date = currentTime.toLocaleDateString()
    var entry = document.createElement("div")
    statusLabel.textContent = "No active session"
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
    clearInterval(timerInterval)
})


