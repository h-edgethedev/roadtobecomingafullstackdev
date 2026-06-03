var noteEl = document.getElementById("note")
var statusEl = document.getElementById("status")

let currentContent = ""

window.addEventListener("DOMContentLoaded", () => {
    currentContent = noteEl.textContent
})

noteEl.addEventListener("blur", () => {
    const newContent = noteEl.innerHTML
    if (currentContent == newContent) {
        return
    }
    currentContent = newContent
    console.log(currentContent)
    statusEl.textContent = "Note saved successfully!"
})

noteEl.addEventListener("focus", ()=>{
    statusEl.textContent= ""
})

