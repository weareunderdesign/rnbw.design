const bannerTemplate = `
<nav class="box-l padding-l row box border-bottom justify-stretch">
    <a href="https://rnbw.company" class="box gap-l">
        <svg-icon src="https://rnbw.company/images/rnbw.svg"></svg-icon>
        <div class="text-s">high-quality,</br> functional design</br>and development tools</div>
    </a>
    <div class="gap-l box justify-end">
        <a href="https://rnbw.company/" class="column">
        try rainbow if you have the courage ↗
        </a>
    </div>
</nav>
`;

class RnbwBanner extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = bannerTemplate;
    }
}

customElements.define("rnbw-banner", RnbwBanner);