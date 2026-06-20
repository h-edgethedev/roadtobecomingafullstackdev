var textInput = document.getElementById("text-input")
var checkBtn = document.getElementById("check-btn")
var result= document.getElementById("result")

checkBtn.addEventListener("click", () => {
    if (textInput.value.trim() == "") {
        alert("Please input a value.")
        return
    }
        var input = textInput.value
        var trimmedInput= input.replace(/[^a-z0-9]/gi, "")
        var reversedInput = trimmedInput.toLowerCase().split("").reverse().join("")
        if(reversedInput== trimmedInput.toLowerCase()){
            result.textContent = `${input} is a palindrome`
        }
        else{
            result.textContent = `${input} is not a palindrome`
        }
})