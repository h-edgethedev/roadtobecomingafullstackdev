const footballTeam = {
    team: "Manchester City",
    year: 2026,
    headCoach: "Pep Guardiola",
    players: [
        {
            name: "Gianluigi Donnaruma",
            position: "goalkeeper",
            isCaptain: false,
        },
        {
            name: "Nico O'reily",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Ruben Dias",
            position: "defender",
            isCaptain: false,
        },
        {
            name: "Benardo Silva",
            position: "midfielder",
            isCaptain: true
        },
        {
            name: "Rodrigo Hernandez",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Erling Haaland",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Jeremy Doku",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Antoine Semenyo",
            position: "forward",
            isCaptain: false,
        },
        {
            name: "Omar Marmoush",
            position: "forward",
            isCaptain: false
        },
        {
            name: "James Trafford",
            position: "goalkeeper",
            isCaptain: false
        }
    ]
}

var teamName = document.getElementById("team")
teamName.innerText = teamName.innerText + " " + footballTeam.team
var headCoach = document.getElementById("head-coach")
headCoach.innerText = headCoach.innerText + " " + footballTeam.headCoach
var year = document.getElementById("year")
year.innerText = year.innerText + " " + footballTeam.year
var playerCards = document.getElementById("player-cards")


function displayPlayers(players) {
    playerCards.innerHTML = players.map((player) => {
      return  `
     <div class="player-card">
        <h2>${player.isCaptain ? "(Captain)" : ""}${player.name} </h2>
        <p>Position: ${player.position}</p>
    </div>
        `
    }).join("")
}

displayPlayers(footballTeam.players)

var playerDropdown= document.getElementById("players")

playerDropdown.addEventListener("change", (e)=>{
    const selectedPosition= e.target.value
    if (selectedPosition==="all"){
        displayPlayers(footballTeam.players)
    }
    else{
        const filterPlayers= footballTeam.players.filter((player)=>{
            return player.position=== selectedPosition
        })

        displayPlayers(filterPlayers)
    }
})