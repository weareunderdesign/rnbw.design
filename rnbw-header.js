const headerTemplate = `
<nav class="box-l padding-l gap-l justify-stretch" id="rnbw-logo">
    <div class="gap-l box">
        <a href="https://weareunder.design/" target="_blank" class="under-logo">
        <svg-icon src="https://rnbw.design/images/under.svg" style="width: 2.5rem; height: 3.5rem;"></svg-icon>
        </a>
        <a href="https://rnbw.design/" class="rnbw-logo">
        <svg-icon src="https://rnbw.design/images/rnbw.svg"></svg-icon>
        </a>
        <div class="text-s">high-quality,</br> design and</br>development tools</div>
    </div>
    <div class="gap-m justify-end box">
        <a id="nav-item" href="https://rnbw.dev" class="align-center column text-m gap-xs">
        <svg-icon src="https://rnbw.design/images/logo.svg" id="header-item"></svg-icon>
            rnbw 0.1
        </a>
        <a id="nav-item" href="https://renecss.org" class="align-center column text-m gap-xs">
        <svg-icon src="https://rnbw.design/images/rene.svg" id="header-item"></svg-icon>
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
    this.setupLogoHovers();
    this.setupNavItemHovers();
    this.highlightActiveLink();
  }

  setupLogoHovers() {
    const underLogo = this.querySelector('.under-logo svg-icon');

    // Under logo hover
    underLogo.parentElement.addEventListener('mouseover', () => {
      underLogo.setAttribute('src', 'https://rnbw.design/images/under-hover.svg');
    });
    underLogo.parentElement.addEventListener('mouseout', () => {
      underLogo.setAttribute('src', 'https://rnbw.design/images/under.svg');
    });
  }

  setupNavItemHovers() {
    const navItems = this.querySelectorAll("#nav-item");

    navItems.forEach((navItem) => {
      const headerItem = navItem.querySelector("#header-item");
      const originalSrc = headerItem.getAttribute('src');
      const hoverSrc = originalSrc.replace('.svg', '-hover.svg'); // Replace with your hover state naming convention

      navItem.addEventListener("mouseover", () => {
        headerItem.setAttribute('src', hoverSrc);
      });

      navItem.addEventListener("mouseout", () => {
        headerItem.setAttribute('src', originalSrc);
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