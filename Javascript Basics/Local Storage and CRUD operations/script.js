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

// document.cookie = "userInfo=" + JSON.stringify(userData) + "; path=/"
let request = indexedDB.open("Sample DB", 1);

request.onupgradeneeded = function(event) {
  let db = event.target.result;
  let objectStore = db.createObjectStore("customers", { keyPath: "id" });
};
let transaction = db.transaction(["customers"], "readwrite");
let objectStore = transaction.objectStore("customers");
let request = objectStore.add({ id: 1, name: "John Doe", email: "john@example.com" });

request.onerror = function(event) {
  console.log("Error adding data");
};

request.onsuccess = function(event) {
  console.log("Data added successfully");
};