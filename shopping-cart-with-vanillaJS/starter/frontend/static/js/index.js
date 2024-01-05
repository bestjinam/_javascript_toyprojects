import Home from "./Home.js";
import CartHelper from "./helper/CartHelper.js";
import Cart from "./Cart.js";
const container = document.getElementById('container');

const navigateTo = url => {
    history.pushState({}, "", url);
    loadPage();
}
//event ? 
// target ? parentNode ? 
const route = event => {
    event = event || window.event;

    event.preventDefault();
    navigateTo(event.target.href);

    if (event.target.parentNode.id === 'cart'){
        console.log("sklajdlaskjdalk");
        navigateTo(event.target.parentNode.parentNode.href);
    } else if (event.target.parentNode.id === 'cart-route'){
        navigateTo(event.target.parentNode.href);
    } else if (event.target.parentNode.id === 'product'){
        console.log("Hello");
        //navigateTo(event.target.href);
        navigateTo(event.target.parentNode.href);
    
    } else {
        navigateTo(event.target.href);
    }
}

function generateNavbarHtml(cartItemCount){
    return `
        <nav class="navbar shadow-sm sticky-top">
            <div class="container">
                <a class="navbar-brand font-monospace" data-link href="/">Shopping Cart</a>
                <a href="/cart" data-link id="cart-route" onclick="route()">
                    <div class="ms-auto" id="cart" style="text-decoration: none; color : black">
                    <i style="font-size: 20px" class="fa-solid fa-cart-shopping"></i>
                    <span class="cartItem"id="nav-cart-item">${cartItemCount}</span>
                    </div>
                </a>
            </div>
        </nav> 
    `
}


function loadNavbar(){
    container.innerHTML = generateNavbarHtml(CartHelper.getCartItemCount);
}

function loadPage(){
    loadNavbar();
    console.log(location);
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    if (location.pathname === '/'){
        new Home('container');
    } else if (location.pathname === '/cart') {
        new Cart('container');
    } else
    {

    }
}
window.route = route;
window.onpopstate = loadPage;

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link')){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    loadPage();
})