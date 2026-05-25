const instrumentsArr= [
    {
        category : "woodwinds",
        instrument : "Flute",
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
    }
]

var selectContainer= document.querySelector(".select-container")
var productsContainer= document.querySelector("products-container")

function instrumentCards(params) {
    const instruments= params === "all"? instrumentsArr :
    instrumentsArr.filter(({category}) => category=== params)
    return instruments.map(({instruments, price}))
}


selectContainer.addEventListener("change", ()=>{
    console.log(instrumentCards(selectContainer.value))
})

