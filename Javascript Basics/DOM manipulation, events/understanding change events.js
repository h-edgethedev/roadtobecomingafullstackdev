const selectMenu = document.getElementById("select-menu");
selectMenu.addEventListener("change", (event) => {
  console.log(`You selected: ${event.target.value}`);
});

const p = document.querySelector("p");
const span = document.querySelector("span");
// p.addEventListener("click", (event) => {
//   console.log("P listener: ");
//   console.log(event.target);
// });
// span.addEventListener("click", (event) => {
//   console.log("Span listener: ");
//   console.log(event.target);
// });

// p.addEventListener("click", (event) => {
//   console.log("P listener: ");
//   console.log(event.target);
// });
// span.addEventListener("click", (event) => {
//   console.log("Span listener: ");
//   console.log(event.target);
//   // event.stopPropagation();
// });


p.addEventListener("click", (event)=>{
  event.target.style.color= "red"
})