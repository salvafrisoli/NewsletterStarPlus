/* NAV */
const burgerMenuItems = document.getElementById("burger-menu")
const nav = document.querySelector("nav");
const container = nav.firstElementChild;
const burgerMenu = document.querySelector(".burger-nav");
const datosUsuario = document.getElementById("datosUsuario")
burgerMenu.addEventListener("click", () => {
  burgerMenuItems.style.display = "block";

});
burgerMenuItems.addEventListener("click", () => {
  burgerMenuItems.style.display = "none";
});