class Logo extends HTMLElement {
    constructor() {
        super();

        const src = this.getAttribute("src");
        const alt = this.getAttribute("alt");

        this.innerHTML = `
            <img class="nav-logo__img" src="${src}" alt="${alt}">
        `;
    }
}

window.customElements.define("logo-img", Logo);