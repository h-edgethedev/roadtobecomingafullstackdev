// const user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// }

// const jsonString = JSON.stringify(user)
// console.log(jsonString)
// console.log(user)
// console.log(typeof (jsonString))
// console.log(typeof(user))

// console.log(user?.job?.street)
// const user2= user
// user2.age= 48

// console.log(user, user2)

// const {name: var1,age: var2, isAdmin: smth}= user2
// console.log(var1)

// let name= "Heritage"
// let age = 18
// let isAdmin= true

// const person= {name, age, isAdmin}
// console.log(person)

const recipes = []
const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
}

const recipe2 = {
    name: "Chicken Curry",
    "ingredients": ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
}

const recipe3= {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
}

recipes.push(recipe1)
recipes.push(recipe2)
recipes.push(recipe3)

console.log(recipes)

function getTotalIngredients(ingredients) {
    return ingredients.length
}

console.log(getTotalIngredients(recipe1.ingredients))

function getDifficultyLevel(time){
    if (time<=30){
        return "easy"
    }
    else if(time<=60){
        return "medium"
    }
    else{
        return "hard"
    }
}

var recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients)
var recipe1DifficultyLevel= getDifficultyLevel(recipe1.cookingTime)
console.log(recipe1TotalIngredients)
console.log(recipe1DifficultyLevel)

recipe1.totalIngredients= recipe1TotalIngredients
recipe1.difficultyLevel= recipe1DifficultyLevel

recipe2.totalIngredients= getTotalIngredients(recipe2.ingredients)
recipe2.difficultyLevel= getDifficultyLevel(recipe2.cookingTime)

recipe3.totalIngredients= getTotalIngredients(recipe3.ingredients)
recipe3.difficultyLevel= getDifficultyLevel(recipe3.cookingTime)

console.log(recipes)