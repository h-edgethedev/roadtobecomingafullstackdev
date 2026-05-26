const instrumentsArr = [
    {
        category: "woodwinds",
        instrument: "Flute",
        price: 500
    },
    {
        category: "woodwinds",
        instrument: "Clarinet",
        price: 200
    },
    {
        category: "woodwinds",
        instrument: "Oboe",
        price: 4000
    },
    {
        category: "brass",
        instrument: "Trumpet",
        price: 200
    },
    {
        category: "brass",
        instrument: "Trombone",
        price: 300
    },
    {
        category: "brass",
        instrument: "French horn",
        price: 4300
    },
    {
        category: "percussion",
        instrument: "Drum Set",
        price: 500
    },
    {
        category: "percussion",
        instrument: "Xylophone",
        price: 3000
    },
    {
        category: "percussion",
        instrument: "Cymbals",
        price: 200
    },
    {
        category: "percussion",
        instrument: "Marimba",
        price: 3000
    }
]

var selectContainer = document.querySelector(".select-container")
var productsContainer = document.querySelector(".products-container")

function instrumentCards(params) {
    const instruments = params === "all" ? instrumentsArr :
        instrumentsArr.filter(({ category }) => category === params)

    return instruments.map(({ instrument, price }) => {
        return `
            <div class="card">
            <h2>${instrument}</h2>
            <p>$${price}</p>
        </div>
            `
    }).join('')
}


selectContainer.addEventListener("change", (event) => {
    productsContainer.innerHTML = instrumentCards(event.target.value)
})

