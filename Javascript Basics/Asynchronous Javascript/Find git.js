const usernameInput = document.getElementById("Username-input")
const searchBtn = document.getElementById("search-btn")
const resultContainer = document.getElementById("results-container")
const loader = document.getElementById("loader")

var url = "https://api.github.com/users/"
const getDetails = async () => {
    try {
        loader.classList.remove("hidden");
        const result = await fetch(`${url}${usernameInput.value.trim()}`)
        const data = await result.json()
        console.log(data)
        loader.classList.add("hidden");
        displayResults(data)
    }
    catch (error) {
        console.error(error.message)
    }
}

searchBtn.addEventListener("click", () => {
    if (!usernameInput.value.trim()) {
        alert("Kindy Input a username");
        return
    }
    getDetails()
})

function displayResults(data) {
    resultContainer.innerHTML = `
    <img src="${data.avatar_url} " alt="${data.login} Avatar" id="avatar">
    <p>@${data.login}</p>
    <p>${data.name}</p>
    <p>${data.followers}followers</p>
    <p>${data.following}following</p>
    <p>${data.location}</p>
    <p>${data.public_repos} Public Repositories</p>
    <a href="${data.html_url} " target= "_blank">Visit Github</a>
    `
    resultContainer.style.display = "block"
}

