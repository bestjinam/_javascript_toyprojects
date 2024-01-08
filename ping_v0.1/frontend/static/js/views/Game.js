import AbstractView from "./AbstractView.js";

export default class Game extends AbstractView {
    constructor () {
        super ();
        this.setTitle("GAME");
    }

    async getHtml() {
        return `
        <h1>  HI? MY NAME IS GAME </h1>
        <p> This is Game page. </p>
        `
    }
}