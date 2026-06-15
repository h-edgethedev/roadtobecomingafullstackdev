var messageInput = document.getElementById("message-input")
var result = document.getElementById("result-message")
var checkMessageButton = document.getElementById("check-message-btn")

function isSpam(msg) {
    var helpRegex = /please help/i;
    return msg.match(helpRegex)
}

checkMessageButton.addEventListener("click", () => {
    if (messageInput.value.trim() === "") {
        alert("Please enter a message.")
        return
    }
    result.textContent = isSpam() ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam."
    messageInput.value = ""
})

