import AbstractView from "./AbstractView.js";

export default class Home extends AbstractView {
    constructor (params) {
        super (params);
        this.setTitle("HOME");
    }

    async getHtml() {
        return `
        <h1>  HI? MY NAME IS HOME </h1>
        <p> This is Home page. </p>
        `
    }
}