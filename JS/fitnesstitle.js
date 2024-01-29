class Component_fitnesstitle extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
        <link rel="stylesheet" href="/css/fitword.css">
        <div class="menu">
            <div class="topword">
                <span>
                    習慣將成為第二天性
                    <br>
                    No pain No gain,
                    Trust the process
                </span>
            </div>
        </div>
        `;
        }
}
customElements.define('component-fitnesstitle', Component_fitnesstitle);