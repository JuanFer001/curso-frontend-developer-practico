const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIco = document.querySelector('.menu');
const menuCarritoIco = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer  = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIco.addEventListener('click', toggleMobilepMenu);
menuCarritoIco.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isMenuCarritoOpen = !shoppingCartContainer.classList.contains('inactive');
    if(isMenuCarritoOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu(){
    const isMenuCarritoOpen = !shoppingCartContainer.classList.contains('inactive');
    if(isMenuCarritoOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleCarritoAside(){
    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })

    productList.push({
        name: 'Pantalla',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })

    productList.push({
        name: 'Computadora',
        price: 320,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
        
      </div>
*/

    function renderProducts(arr){
        for(product of arr ){
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
    
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
            productImg.addEventListener('click', openProductDetailAside)
    
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
    
            const productInfoDiv = document.createElement('div');
    
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
    
            const productName = document.createElement('p');
            productName.innerText = '$' + product.name;
    
            const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
            productInfoFigure.appendChild(productImgCart);
    
            cardsContainer.appendChild(productCard);
        }
    }

    renderProducts(productList);