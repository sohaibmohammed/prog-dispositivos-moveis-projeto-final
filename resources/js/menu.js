const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const buttonMenu = document.querySelector(".button-menu");
const links = document.querySelectorAll(".menu-link");

function toggleMenu() {
  menu.classList.toggle("active");
  body.classList.toggle("active");
}

function removeActiveClass() {
  body.classList.remove("active");
  menu.classList.remove("active");
}

buttonMenu.addEventListener("click", toggleMenu);

links.forEach((link) => {
  link.addEventListener("click", removeActiveClass);
});