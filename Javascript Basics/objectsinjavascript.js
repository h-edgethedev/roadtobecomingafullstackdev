const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    complexion: "fair",
    contact: {
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
// const tiger= {
//     species: "Tiger",
//     age: 5,
//     isEndangered: true
// }

// const elephant= {
//     species: "Elephant",
//     age: 10,
//     isEndangered: true
// }

// function getSpecies(animal){
//     return animal.species
// }
// console.log(getSpecies(tiger))

// function getAge(animal) {
//     return animal.age
// }

// console.log(getAge(tiger))

// function addHabitat(animal, habitat) {
//     animal.habitat= habitat
//     return animal
// }

// console.log(addHabitat(tiger, "Rainforest"))

// function updateAge(animal, newAge) {
//     animal.age= newAge
//     return animal
// }

// console.log(updateAge(elephant, 12))

// function removeEndangeredStatus(animal) {
//     delete animal.isEndangered
//     return animal
// }

// console.log(removeEndangeredStatus(tiger))

// function hasHabitat(animal) {
//     return animal.hasOwnProperty("habitat")
// }
// console.log(hasHabitat(tiger))
// console.log(hasHabitat(elephant))

// function getProperty(animal,propertyName) {
//     return animal[propertyName]
// }

// console.log(getProperty(tiger, "species"))
// console.log(getProperty(elephant, "age"))

function normalizeUnits(manifest) {
    const newObj = new Object
    newObj.containerId = manifest.containerId
    newObj.destination = manifest.destination
    newObj.hazmat = manifest.hazmat
    if (manifest.unit === "lb") {
        newObj.weight = manifest.weight * 0.45
        newObj.unit = "kg"
    }
    else {
        newObj.weight = manifest.weight
        newObj.unit = manifest.unit

    } return newObj
}

const cargomanifest0846 = {
    containerId: 1,
    destination: "Monterey, California, USA",
    weight: 101,
    unit: "lb",
    hazmat: false
}
const cargomanifest0847 = {
    containerId: 10383,
    destination: "Littleville, California, USA",
    weight: 98,
    unit: "lb",
    hazmat: false
}
// console.log(normalizeUnits(cargomanifest0846))
// console.log(normalizeUnits(cargomanifest0847))

function validateManifest(manifest) {
    const mis = "Missing"
    const inv = "Invalid"
    const newobj = new Object;
    if (Object.keys(manifest).length === 0) {
        newobj.containerId = mis
        newobj.destination = mis
        newobj.weight = mis
        newobj.unit = mis
        newobj.hazmat = mis
    }

    else {
        if (manifest.hasOwnProperty("containerId") != true) {
            newobj.containerId = "Missing"
        }

        else {
            if (Number.isInteger(manifest.containerId) != true || manifest.containerId < 1)
                newobj.containerId = inv
        }

        if (manifest.hasOwnProperty("destination") != true) {
            newobj.destination = mis
        }

        else {
            if (typeof (manifest.destination) !== typeof ("heritage") || manifest.destination.trim() === "") {
                newobj.destination = inv
            }
        }

        if (manifest.hasOwnProperty("weight") != true) {
            newobj.weight = mis
        }
        else {
            if (typeof (manifest.weight) !== typeof (45) || manifest.weight < 1 || isNaN(manifest.weight)==true) {
                newobj.weight = inv
            }
        }

        if (manifest.hasOwnProperty("unit") != true) {
            newobj.unit = mis
        }

        else {
            if (manifest.unit != "kg" && manifest.unit != "lb") {
                newobj.unit = inv
            }
        }

        if (manifest.hasOwnProperty("hazmat") != true) {
            newobj.hazmat = mis
        }

        else {
            if (typeof (manifest.hazmat) != typeof (true)) {
                newobj.hazmat = inv
            }
        }
    }
    return newobj
}    //     

const plutoniumContainer = {
    containerId: 0,
    destination: "Santa Cruz",
    weight: -304,
    unit: "kg",
}

console.log(validateManifest(plutoniumContainer))

const cargomanifest0848 = {
    containerId: NaN,
    destination: "Santa Cruz",
    weight: NaN ,
    unit: "pounds",
    hazmat: false
}
const cargomanifest0849 = {
    containerId: 27394,
    destination: " ",
    weight: 84 ,
    unit: "kg",
    hazmat: false
}

console.log(validateManifest(cargomanifest0848))
console.log(validateManifest(cargomanifest0849))

