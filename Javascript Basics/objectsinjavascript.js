const person= {
    name: "Alice",
    age: 30,
    city: "New York",
    complexion: "fair",
    contact:{
        email: "johndoe@gmail.com",
        phone: {
            home: "+234-9028713476",
            work: "+234-8028476826"
        }
    }
}

// const {complexion, ...remainingObjects}= person
// console.log(remainingObjects)
// console.log(Object.hasOwn(person, "name"))

// console.log(person.contact.email)
// console.log(person.contact.phone)
// console.log(person["contact"]["phone"]["work"])

// const mainArray= ["heritage", "Charles", "Samuel", "Lateef"]
// const shallowCopy= mainArray
// shallowCopy[0]= "H~Edgethedev"
// console.log(mainArray)
// console.log(shallowCopy)  

const num = 42;
const numObj = Object(num); // Creates an object wrapper for the number

// console.log(numObj);
// console.log(typeof numObj); // "object"

// console.log(Object(person))

// let obj = Object(42);
// console.log(typeof obj);

//// Workshop: Building a Wildlife Tracker
const tiger= {
    species: "Tiger",
    age: 5,
    isEndangered: true
}

const elephant= {
    species: "Elephant",
    age: 10,
    isEndangered: true
}

function getSpecies(animal){
    return animal.species
}
console.log(getSpecies(tiger))

function getAge(animal) {
    return animal.age
}

console.log(getAge(tiger))

function addHabitat(animal, habitat) {
    animal.habitat= habitat
    return animal
}

console.log(addHabitat(tiger, "Rainforest"))

function updateAge(animal, newAge) {
    animal.age= newAge
    return animal
}

console.log(updateAge(elephant, 12))

function removeEndangeredStatus(animal) {
    delete animal.isEndangered
    return animal
}

console.log(removeEndangeredStatus(tiger))

function hasHabitat(animal) {
    return animal.hasOwnProperty("habitat")
}
console.log(hasHabitat(tiger))
console.log(hasHabitat(elephant))

function getProperty(animal,propertyName) {
    return animal[propertyName]
}

console.log(getProperty(tiger, "species"))
console.log(getProperty(elephant, "species"))