const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    console.log('clic');
    desktopMenu.classList.toggle('inactive');
}
console.log('JS Funciona');