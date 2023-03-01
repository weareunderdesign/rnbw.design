const navTemplate = `
<nav class="box-l padding-l direction-column gap-l box">
    <a href="https://rnbw.company" class="box gap-l">
        <svg-icon src="https://rnbw.company/images/rnbw.svg"></svg-icon>
        <span class="text-s">high-quality,</br> functional design</br>and development tools</span>
    </a>
    <div class="gap-l box justify-end">
        <a href="https://rnbw.company/" class="align-center direction-row">
            <svg-icon src="https://rnbw.company/images/ovrvw.svg" class="border radius-s foreground-secondary icon-xl" id="nav-item"></svg-icon>
            rnbw 0.1
        </a>
        <a href="https://guide.rnbw.dev/" class="align-center direction-row">
        <svg-icon src="https://rnbw.company/images/usrgd.svg" class="border radius-s icon-xl" id="nav-item"></svg-icon>
            guide
        </a>
        <a href="https://discord.gg/cKHxeyR2" class="align-center direction-row">
        <svg-icon src="https://rnbw.company/images/cmnty.svg" class="border radius-s icon-xl" id="nav-item"></svg-icon>
            community
        </a>
        <a href="https://rnbw.dev/" class="align-center direction-row">
        <svg-icon src="https://rnbw.company/images/gtstrt.svg" class="border radius-s icon-xl" id="nav-item"></svg-icon>
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