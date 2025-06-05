const sideMenu = document.querySelector("#side-menu");

function openMenu() {
  sideMenu.style.transform = " translate(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translate(16rem)";
}
