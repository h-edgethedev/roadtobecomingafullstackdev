var textArea = document.querySelector("#text-input")
var charCount = document.querySelector("#char-count")

textArea.addEventListener("input", () => {
    var lengthWords = textArea.value.length
    if (lengthWords <= 50) {
        charCount.innerText = `Character Count: ${lengthWords}/50`
        console.log(`${lengthWords}/50`)
    }
    else {
        var words = textArea.value
        console.log(words)
        textArea.value = words.slice(0, 50)
    }

    if (lengthWords==50){
        charCount.style.color= "red"
    }
})
