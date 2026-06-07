function createComponent(tag, path) {
    class Component extends HTMLElement {
        async connectedCallback() {
            const response = await fetch(path);
            this.innerHTML = await response.text();
        }
    }

    customElements.define(tag, Component);
}

createComponent("nav-component", "../../components/nav/nav.html");
createComponent("button-component", "../../components/button/button.html");