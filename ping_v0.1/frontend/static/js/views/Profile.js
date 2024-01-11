import AbstractView from "./AbstractView.js";

export default class Profile extends AbstractView {
    constructor (params) {
        super (params);
        console.log(this.params);
        this.setTitle("PROFILE");
    }

    async getHtml() {
        console.log(this.params.id);
        return `
        <h1>  HI? askdljaslkdj MY NAME IS PROFILE </h1>
        <p> This is Profile page. </p>
        `
    }
}