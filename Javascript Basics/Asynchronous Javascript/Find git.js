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


// avatar_url
// :
// "https://avatars.githubusercontent.com/u/190675403?v=4"
// bio
// :
// null
// blog
// :
// ""
// company
// :
// null
// created_at
// :
// "2024-12-05T01:44:03Z"
// email
// :
// null
// events_url
// :
// "https://api.github.com/users/h-edgethedev/events{/privacy}"
// followers
// :
// 3
// followers_url
// :
// "https://api.github.com/users/h-edgethedev/followers"
// following
// :
// 8
// following_url
// :
// "https://api.github.com/users/h-edgethedev/following{/other_user}"
// gists_url
// :
// "https://api.github.com/users/h-edgethedev/gists{/gist_id}"
// gravatar_id
// :
// ""
// hireable
// :
// null
// html_url
// :
// "https://github.com/h-edgethedev"
// id
// :
// 190675403
// location
// :
// null
// login
// :
// "h-edgethedev"
// name
// :
// "h~edge"
// node_id
// :
// "U_kgDOC115yw"
// organizations_url
// :
// "https://api.github.com/users/h-edgethedev/orgs"
// public_gists
// :
// 0
// public_repos
// :
// 18
// received_events_url
// :
// "https://api.github.com/users/h-edgethedev/received_events"
// repos_url
// :
// "https://api.github.com/users/h-edgethedev/repos"
// site_admin
// :
// false
// starred_url
// :
// "https://api.github.com/users/h-edgethedev/starred{/owner}{/repo}"
// subscriptions_url
// :
// "https://api.github.com/users/h-edgethedev/subscriptions"
// twitter_username
// :
// null
// type
// :
// "User"
// updated_at
// :
// "2026-06-24T09:09:34Z"
// url
// :
// "https://api.github.com/users/h-edgethedev"
// user_view_type
// :
// "public"
// [[Prototype]]
// :
// Object