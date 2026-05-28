var options = ["Rock", "Paper", "Scissors"]

function getRandomComputerResult() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return true
    }
    else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return true
    }
    else if (playerChoice == "Paper" && computerChoice == "Rock") {
        return true
    }
    else {
        return false
    }
}

var playerScore = 0
var computerScore = 0

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (hasPlayerWonTheRound(userOption, computerResult)== true){
        playerScore++
        return `Player wins! ${userOption} beats ${computerResult}`
    }
    else if (hasPlayerWonTheRound(userOption, computerResult)== false){
        if (userOption!== computerResult){
            computerScore++
            return `Computer wins! ${computerResult} beats ${userOption}`
        }
        else {
            return `It's a tie! Both chose ${userOption}`
        }
    }
}

var playerScoreSpanElement= document.getElementById("player-score");
var computerScoreSpanElement= document.getElementById("computer-score")
var roundResultsMsg= document.getElementById("results-msg")

var winnerMsgElement= document.getElementById("winner-msg")
var optionsContainer= document.querySelector(".options-container")
var resetGameBtn= document.getElementById("reset-game-btn")

function showResults(userOption){
    roundResultsMsg.innerText= getRoundResults(userOption)
    playerScoreSpanElement.innerText= playerScore
    computerScoreSpanElement.innerText= computerScore
    if (computerScore==3){
        winnerMsgElement.innerText= "Computer has won the game!"
        resetGameBtn.style.display= "block"
        optionsContainer.style.display= "none"
    }

    else if(playerScore== 3){
        winnerMsgElement.innerText= "Player has won the game!"
        resetGameBtn.style.display= "block"
        optionsContainer.style.display= "none"
    }
}

function resetGame() {
    playerScore= 0
    computerScore= 0
    playerScoreSpanElement.innerText= playerScore
    computerScoreSpanElement.innerText= computerScore
    optionsContainer.style.display= "block"
    winnerMsgElement.innerText= ""
    roundResultsMsg.innerText= ""
    resetGameBtn.style.display= "none"
}

resetGameBtn.addEventListener("click", ()=>resetGame())

var rockBtn= document.getElementById("rock-btn")
var paperBtn= document.getElementById("paper-btn")
var scissorsBtn= document.getElementById("scissors-btn")

rockBtn.addEventListener("click", ()=>showResults("Rock"))
paperBtn.addEventListener("click", ()=> showResults("Paper"))
scissorsBtn.addEventListener("click", ()=>showResults("Scissors"))

