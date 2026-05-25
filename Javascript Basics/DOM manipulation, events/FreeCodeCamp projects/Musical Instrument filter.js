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


selectContainer.addEventListener("change", ()=>{
    console.log(selectContainer.value)
})

function instrumentCards(params) {
    if (selectContainer.value==="all"){
        return instrumentsArr;
    }

    else{
        const filteredInstruments= instrumentsArr.filter(function(instrument){
            return instrumentsArr.cat
        })
    }
}