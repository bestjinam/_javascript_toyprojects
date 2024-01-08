import AbstractView from "./AbstractView.js";

export default class Home extends AbstractView {
    constructor () {
        super ();
        this.setTitle("HOME");
    }

    async getHtml() {
        return `
        <h1>  HI? MY NAME IS HOME </h1>
        <p> This is Home page. </p>
        `
    }
}