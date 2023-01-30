const bannerTemplate = `
<nav class="box-l padding-l direction-column box border-bottom">
    <a href="https://rnbw.company" class="box gap-l">
    <img src="https://rnbw.company/images/rnbw.svg">
        <p class="text-s">high-quality,</br> functional design</br>and development tools</p>
    </a>
    <div class="gap-l box justify-end">
        <a href="https://rnbw.company/" class="align-center direction-row">
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