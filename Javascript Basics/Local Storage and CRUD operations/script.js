// localStorage.setItem("theme", "dark")
// const userTheme = localStorage.getItem("theme")
// console.log(userTheme)
// localStorage.removeItem("theme")
// localStorage.clear()
// console.log(userTheme)

// document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/";
// let fingerprintExample = navigator.userAgent + screen.width + screen.height;
// console.log(fingerprintExample);

// const userData = {
//   name: "John Doe",
//   age: 30,
//   role: "admin"
// };

// let request = indexedDB.open("Sample DB", 1); // only ONE 'request' declaration

// request.onupgradeneeded = function(event) {
//   let db = event.target.result;
//   db.createObjectStore("customers", { keyPath: "id" });
// };

// request.onsuccess = function(event) {
//   let db = event.target.result; // ✅ db is now properly scoped

//   let transaction = db.transaction(["customers"], "readwrite");
//   let objectStore = transaction.objectStore("customers");
//   let addRequest = objectStore.add({ id: 1, name: "John Doe", email: "john@example.com" }); // ✅ different name

//   addRequest.onerror = function() {
//     console.log("Error adding data");
//   };

//   addRequest.onsuccess = function() {
//     console.log("Data added successfully");
//   };
// };

// request.onerror = function() {
//   console.log("Failed to open DB");
// };

let request = indexedDB.open("My first DB", 1);
// request.onerror = function(event){
//   console.log("Error opening database.")
// }

// request.onsuccess= function(event){
//   let db = event.target.result
//   console.log("Database opened successfully") 
// }
request.onupgradeneeded = function (event) {
  let db = event.target.result;
  let objectStore = db.createObjectStore("customers", { keyPath: "id" })
}

// request.onsuccess = function(event){
//   let db = event.target.result
//   let transaction = db.transaction(["customers"], "readwrite")
//   let objectStore = transaction.objectStore("customers")
//   let addRequest = objectStore.add({ id: 1, name: "John Doe", email: "john@example.com" })

//   addRequest.onerror= function(){
//     console.log("Error adding data")
//   }

//   addRequest.onsuccess = function(){
//     console.log("Data added successfully")
//   }
// }

// request.onerror = function() {
//   console.log("Failed to open DB");
// };

request.onsuccess = function (event) {
  let db= event.target.result
  let transaction = db.transaction(["customers"])
  let objectStore = transaction.objectStore("customers")
  let getrequest = objectStore.get(1)

  getrequest.onerror = function (event) {
    console.log("Error retrieving data")
  }

  getrequest.onsuccess = function (event) {
    console.log("customer: ", getrequest.result)
  }
}