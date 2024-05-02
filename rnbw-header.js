const headerTemplate = `
<nav class="box-l padding-l gap-l justify-stretch" id="rnbw-logo">
    <div class="gap-l box">
        <a href="https://rnbw.company/"><svg-icon class="light" src="images/rnbw-light.svg"></svg-icon>
        <svg-icon class="dark" src="images/rnbw-dark.svg"></svg-icon></a>
        <div class="text-s">high-quality,</br> design and</br>development tools</div>
    </div>
    <div class="gap-m justify-end box">
        <a id="nav-item" href="https://rnbw.company/signup" class="align-center column">
        <svg-icon src="images/logo-light.svg" class="light padding-s border radius-s icon-xl" id="header-item" style="display: flex; align-items: center;"></svg-icon>
        <svg-icon src="images/logo-dark.svg" class="dark padding-s border radius-s icon-xl" id="header-item" style="display: flex; align-items: center;"></svg-icon>
            rnbw 0.1
        </a>
        <a id="nav-item" href="https://renecss.org" class="align-center column">
        <svg-icon src="images/rene-light.svg" class="light padding-s border radius-s icon-xl" id="header-item" style="display: flex; align-items: center;"></svg-icon>
        <svg-icon src="images/rene-dark.svg" class="dark padding-s border radius-s icon-xl" id="header-item" style="display: flex; align-items: center;"></svg-icon>
        rene.css
        </a>

    </div>
</nav>
`;

class RnbwHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = headerTemplate;
  }

  connectedCallback() {
    this.applyHoverEffect();
    this.highlightActiveLink();
  }

  applyHoverEffect() {
    const navItems = this.querySelectorAll("#nav-item");

    navItems.forEach((navItem) => {
      const headerItem = navItem.querySelector("#header-item");

      navItem.addEventListener("mouseover", function () {
        headerItem.classList.add("background-secondary");
      });

      navItem.addEventListener("mouseout", function () {
        headerItem.classList.remove("background-secondary");
      });
    });
  }

  highlightActiveLink() {
    function isLinkActive(link) {
      return link.href === window.location.href;
    }

    this.querySelectorAll("#nav-item").forEach((navItem) => {
      const link = navItem.querySelector("a");
      if (isLinkActive(link)) {
        navItem.querySelector("svg-icon").classList.add("foreground-secondary");
      }
    });
  }
  
}

customElements.define("rnbw-header", RnbwHeader);

