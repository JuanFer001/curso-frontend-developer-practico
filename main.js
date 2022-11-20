const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIco = document.querySelector('.menu');
const menuCarritoIco = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIco.addEventListener('click', toggleMobilepMenu);
menuCarritoIco.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isMenuCarritoOpen = !aside.classList.contains('inactive');
    if(isMenuCarritoOpen){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu(){
    const isMenuCarritoOpen = !aside.classList.contains('inactive');
    if(isMenuCarritoOpen){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    aside.classList.toggle('inactive');

}
console.log('JS Funciona');