import AbstractView from "./AbstractView.js";

export default class Stats extends AbstractView {
    constructor (params) {
        super (params);
        this.setTitle("Stats");
    }

    async getHtml() {
        return `
        <h1>  HI? MY NAME IS STATS </h1>
        <p> This is Stats page. </p>
        `
    }
}