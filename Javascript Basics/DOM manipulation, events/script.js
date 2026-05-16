// const container = document.getElementById("container");
// console.log(container); 

// const sectionE1= document.querySelector("section")
// console.log(sectionE1)

const highlightE1= document.querySelector(".highlight");
console.log(highlightE1)

const matches= document.querySelectorAll("ul.ingredients li")
console.log(matches[0])
const container= document.getElementById("container")
container.innerHTML= "<ul><li><u>Cheese</u></li></ul>"

const img = document.createElement("img")
img.src= "/Images/krish-parmar-I70_S2OkWM4-unsplash.jpg"
img.alt= "My future Lamborghini"
img.style.height= "250px"
img.style.width= "300px"
container.appendChild(img)

const container2 = document.getElementById("container2")
console.log(container2.textContent)
container2.innerHTML= "<h2>👋 Hello I'm Heritage</h2>"

const dessertsList= document.getElementById("desserts")
const listItem= document.createElement("li")
listItem.textContent= "Cookies"
dessertsList.appendChild(listItem)
const sectionE1= document.getElementById("example-section");
const lastParagraph= document.querySelector("#example-section p:last-of-type")
console.log(lastParagraph)
sectionE1.removeChild(lastParagraph)

// console.log(navigator.userAgent)

// console.log(navigator.language)
// console.log(window.innerWidth)
// console.log(location)

console.log(document.children)

const para = document.getElementById("para")
para.setAttribute("class", "my-class")
console.log(`${para.outerHTML}`)

const btn= document.getElementById("btn")
btn.addEventListener("click", ()=>alert("You clicked the button"))

const input= document.getElementById("input")
input.addEventListener("input", ()=>{
    console.log(input.value)
})