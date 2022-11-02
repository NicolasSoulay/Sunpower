const openSearchBar = document.querySelector(".openSearchBar");
const searchBarInput = document.querySelector(".searchBarInput");

openSearchBar.addEventListener("click", (e) => {
  openSearchBar.classList.toggle("active");
  searchBarInput.classList.toggle("active");
});

const burguermenu = document.querySelector(".burguermenu");
const sideMenu = document.querySelector(".sideMenu");
const sideMenuList = document.querySelector(".sideMenuList");

burguermenu.addEventListener("click", (e) => {
  sideMenu.classList.toggle("active");
  sideMenuList.classList.toggle("active");
});