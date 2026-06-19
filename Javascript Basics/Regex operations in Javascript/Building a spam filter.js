var messageInput = document.getElementById("message-input")
var result = document.getElementById("result-message")
var checkMessageButton = document.getElementById("check-message-btn")

function isSpam(msg) {
    var helpRegex = /please help | assist me/i;
    var dollarRegex = /[0-9]+\s*(?:|hundred|thousand|million|billion)?\s+dollars/i
    var freeRegex = /free money/i; 
    var denyList = [helpRegex, dollarRegex, freeRegex]

    denyList.some(regex => regex.test(msg))
    return helpRegex.test(msg)
}

checkMessageButton.addEventListener("click", () => {
    if (messageInput.value.trim() === "") {
        alert("Please enter a message.")
        return
    }
    result.textContent = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam."
    messageInput.value = ""
})

