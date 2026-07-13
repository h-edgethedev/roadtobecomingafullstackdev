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

navigator.geolocation.getCurrentPosition(
    (position)=>{
        console.log(`Latitude: ${position.coords.latitude}`)
        console.log(`Longitude: ${position.coords.longitude}`)
        console.log(`Accuracy: ${position.coords.accuracy}`)
    },
    (error)=>{
        console.log(`Error: ${error.message}`)
    }
)

console.log("Location available")