// const aPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Operation successful!");
//   }, 1000);
// });

// aPromise.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     return fetch('https://api.example.com/data2');
//   })
//   .then(response => response.json())
//   .then(data2 => console.log(data2))
//   .catch(error => console.error('Error:', error));

// async function delayedGreeting(params) {
//     console.log("A messenger entered the chat...")
//     await new Promise(resolve=> setTimeout(resolve, 2000))
//     console.log("Hello", params)
// }

// delayedGreeting("Alice")
// console.log("First Printed Message")

// async function fetchUserData() {
//   try {
//     let response = await fetch(`https://api.example.com/users`);
//     let userData = await response.json();
//     console.log(userData);
//   } catch (error) {
//     console.log("Error fetching user data:", error);
//   }
// }

// fetchUserData();

const authorContainer = document.getElementById("author-container")
const loadMoreBtn = document.getElementById("load-more-btn")
var authorDataArr = []
let startingIndex = 0
let endingIndex = 8

const initialFetch = async () => {
    try {
        const res = await fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
        authorDataArr = await res.json()
        displayAuthors(authorDataArr.slice(startingIndex, endingIndex))
    } catch (error) {
        authorContainer.innerHTML = `<p class= "error-msg">There was an error loading the authors</p>`
    }
}

initialFetch()

const fetchMoreAuthors = () => {
    startingIndex += 8
    endingIndex += 8
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex))
    if (authorDataArr.length <= endingIndex) {
        loadMoreBtn.disabled = true
        loadMoreBtn.textContent = "No more data to load"
        loadMoreBtn.style.cursor = "not-allowed"
    }
}


const displayAuthors = (authors) => {
    authors.forEach(({ author, image, url, bio }, index) => {
        authorContainer.innerHTML += `
        <div id= "${index}" class= "user-card">
        <h2 class= "author-name">${author}</h2>
        <div class= "Purple Divider"></div>
        <img src="${image}" alt="${author} avatar" class="user-img">
        <p class= "bio">${bio.length > 50 ? bio.slice(0, 50) + "..." : bio}</p>
        <a href="${url}" class="author-link" target="_blank">${author}'s author page</a>
        </div>
        `
        console.log(index)
    })
}

loadMoreBtn.addEventListener("click", fetchMoreAuthors)