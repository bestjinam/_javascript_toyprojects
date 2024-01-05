export default class CartHelper{
    static get getCart() {
        return JSON.parse(localStorage.getItem('cart'));
    }
    static get getCartItemCount(){
        let cart = this.getCart;
        if (cart?.length > 0){
            return cart.reduce((ack, currItem) => ack + currItem.amount, 0);
        }
        return 0;
    }

    static set setCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    static set updateNavCartValue(value) {
        const cart = document.getElementById('nav-cart-item');
        cart.innerText = value;
    }

    static addToCart(product) {
        let cart = this.getCart;
        const isItemIn
    }
}