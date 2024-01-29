class Component_footer extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
        <link rel="stylesheet" href="/css/footer.css">
        <div class="footer">
            <p>footer</p>
        </div>
        `;
        }
}
customElements.define('component-footer', Component_footer);