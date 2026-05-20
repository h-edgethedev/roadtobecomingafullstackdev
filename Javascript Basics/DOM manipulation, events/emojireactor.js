function updateCount(button) {
    const countEl = button.querySelector(".count");
    var currCount = +countEl.textContent.split("/")[0];
    console.log("Current count:", currCount);
    if (currCount < 10) {
        currCount++
        countEl.textContent = `${currCount}/10`
        console.log(countEl.textContent)
    }
}

var btns = document.querySelectorAll(".emoji-btn")

btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        updateCount(btn)
    })
})