const navTemplate = `
<nav class="box-l padding-l direction-column box">
    <a href="https://rnbw.dev" class="box gap-l">
        <img src="https://rnbw.company/images/rnbw.svg">
        <p class="text-s">high-quality,</br> functional design</br>and development tools</p>
    </a>
    <div class="gap-l box justify-end">
        <a href="https://rnbw.company/" class="align-center direction-row">
            <img src="https://rnbw.company/images/ovrvw.svg" class="border radius-s foreground-secondary icon-l" id="nav-item">
            rnbw 0.1
        </a>
        <a href="https://guide.rnbw.dev/" class="align-center direction-row">
        <img src="https://rnbw.company/images/usrgd.svg" class="border radius-s icon-l" id="nav-item">
            guide
        </a>
        <a href="https://discord.gg/cKHxeyR2" class="align-center direction-row">
        <img src="https://rnbw.company/images/cmnty.svg" class="border radius-s icon-l" id="nav-item">
            community
        </a>
        <a href="https://rnbw.dev/" class="align-center direction-row">
        <img src="https://rnbw.company/images/gtstrt.svg" class="border radius-s icon-l" id="nav-item">
            start
        </a>
    </div>
</nav>
`;

class RnbwNav extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = navTemplate;
    }
}

customElements.define("rnbw-nav", RnbwNav);

const navItems = document.querySelectorAll("#nav-item");

navItems.forEach(function(navItem) {
  navItem.addEventListener("mouseover", function() {
    navItem.classList.add("background-secondary");
  });

  navItem.addEventListener("mouseout", function() {
    navItem.classList.remove("background-secondary");
  });
});