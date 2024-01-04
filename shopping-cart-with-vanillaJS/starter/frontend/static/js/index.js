import Home from "./Home.js";

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
        navigateTo(event.target.parentNode.parentNode.href);
    } else if (event.target.parentNode.id === 'cart-route'){
        navigateTo(event.target.parentNode.href);
    }else {
        navigateTo(event.target.href);
    }
}

function generateNavbarHtml(){
    return `
        <nav class="navbar shadow-sm sticky-top">
            <div class="container">
                <a class="navbar-brand font-monospace" data-link href="/">Shopping Cart</a>
                <a href="/cart" data-link id="cart-route" onclick="route()">
                    <div class="ms-auto" id="cart" style="text-decoration: none; color : black">
                    <i style="font-size: 20px" class="fa-solid fa-cart-shopping"></i>
                    <span class="cartItem"id="nav-cart-item">0</span>
                    </div>
                </a>
            </div>
        </nav> 
    `
}


function loadNavbar(){
    container.innerHTML = generateNavbarHtml();
}

function loadPage(){
    loadNavbar();
    if (location.pathname === '/'){
        new Home('container');
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