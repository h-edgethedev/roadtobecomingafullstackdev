const selectMenu = document.getElementById("select-menu");
selectMenu.addEventListener("change", (event) => {
  console.log(`You selected: ${event.target.value}`);
});