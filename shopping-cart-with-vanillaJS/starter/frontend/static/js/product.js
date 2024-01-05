export default class Product {
    constructor({image, title, price, id}) {
        this.image = image;
        this.title = title;
        this.price = price;
        this.id = id;
    }

    createHTML() {
        return `
        <div class="pd-card shadow-sm">
            <div class="pd-card-image">
                <a href="/product/${this.id}" class="asdf" id="product" onclick="route()">
                    <img src="${this.image}" height="240" width="240" alt="name">
                </a>
            </div>
            <div class="pd-card-body">
                <h5 class="pd-card-title">${this.title}</h5>
                <p class="pd-card-price"><i>$ ${this.price}</i></p>
                <span class="pd-card-btn" data-product-id="${this.id}">
                    <i style="font-size: 20px" class="fa-solid fa-cart-shopping"></i>
                </span>
            </div>
        </div>
        `
    }
    // createHTML() {
    //     return `
    //     <div class="pd-card shadow-sm">
    //         <div class="pd-card-image">
    //             <a href="/${this.id}" class="asdf" data-link id="product" onclick="route()">
    //                 <img src="${this.image}" height="240" width="240" alt="name">
    //             </a>
    //         </div>
    //         <div class="pd-card-body">
    //             <h5 class="pd-card-title">${this.title}</h5>
    //             <p class="pd-card-price"><i>$ ${this.price}</i></p>
    //             <span class="pd-card-btn" data-product-id="${this.id}">
    //                 <i style="font-size: 20px" class="fa-solid fa-cart-shopping"></i>
    //             </span>
    //         </div>
    //     </div>
    //     `
    // }
}