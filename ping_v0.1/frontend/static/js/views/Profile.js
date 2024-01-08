import AbstractView from "./AbstractView.js";

export default class Profile extends AbstractView {
    constructor () {
        super ();
        this.setTitle("PROFILE");
    }

    async getHtml() {
        return `
        <h1>  HI? MY NAME IS PROFILE </h1>
        <p> This is Profile page. </p>
        `
    }
}