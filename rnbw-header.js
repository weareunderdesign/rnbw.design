const headerTemplate = `
<nav class="box-l padding-l direction-column gap-l box">
    <div class="box gap-l">
        <svg-icon src="https://rnbw.company/images/rnbw.svg"></svg-icon>
        <div class="text-s">high-quality,</br> design and</br>development tools</div>
    </div>
    <div class="gap-l box justify-end">
        <a href="https://rnbw.company/" class="align-center direction-row">
            <svg-icon src="https://rnbw.company/images/ovrvw.svg" class="border radius-s icon-xl" id="header-item"></svg-icon>
            rnbw 0.1
        </a>
        <a href="https://guide.rnbw.dev/" class="align-center direction-row">
        <svg-icon src="https://rnbw.company/images/usrgd.svg" class="border radius-s icon-xl" id="header-item"></svg-icon>
            guide
        </a>
        <a href="https://discord.gg/cKHxeyR2" class="align-center direction-row">
        <svg-icon src="https://rnbw.company/images/cmnty.svg" class="border radius-s icon-xl" id="header-item"></svg-icon>
            community
        </a>
        <a href="https://rnbw.dev/" class="align-center direction-row">
        <svg-icon src="https://rnbw.company/images/gtstrt.svg" class="border radius-s icon-xl" id="header-item"></svg-icon>
            start
        </a>
    </div>
</nav>
`;

class RnbwHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = headerTemplate;
    }
}

customElements.define("rnbw-header", RnbwHeader);

const headerItems = document.querySelectorAll("#header-item");

headerItems.forEach(function (headerItem) {
    headerItem.addEventListener("mouseover", function () {
        headerItem.classList.add("background-secondary");
    });

    headerItem.addEventListener("mouseout", function () {
        headerItem.classList.remove("background-secondary");
    });
});

// Add this function to check if the link is active
function isLinkActive(link) {
    return link.href === window.location.href;
}

// Iterate through the <a> elements
document.querySelectorAll("nav a").forEach((link) => {
    // If the link is active
    if (isLinkActive(link)) {
        // Add the "foreground-secondary" class to the <svg-icon> inside the <a>
        link.querySelector("svg-icon").classList.add("foreground-secondary");
    }
});
