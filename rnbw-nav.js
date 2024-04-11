const navTemplate = `
                <div class="row box-l gap-m align-center">
                        <a id="nav-item"
                            href="https://rnbw.company/signup"
                            target="_blank"
                            class="align-center justify-start padding-l gap-m radius-s background-primary border">
                            <svg-icon
                                src="https://raincons.rnbw.dev/icons/oval.svg"
                                class="icon-s"></svg-icon>
                            <div>
                                <p class="text-l">start</p>
                            </div>
                        </a>
                        <a id="nav-item"
                            href="https://guide.rnbw.dev/"
                            target="_blank"
                            class="align-center justify-start padding-l gap-m radius-s background-primary border">
                            <svg-icon
                                src="https://raincons.rnbw.dev/icons/library.svg"
                                class="icon-s"></svg-icon>
                            <div>
                                <p class="text-l">guide</p>
                            </div>
                        </a>
                        <a id="nav-item"
                            href="https://github.com/orgs/rnbwdev/discussions"
                            target="_blank"
                            class="align-center justify-start padding-l gap-m radius-s background-primary border">
                            <svg-icon
                                src="https://raincons.rnbw.dev/icons/people.svg"
                                class="icon-s"></svg-icon>
                            <div>
                                <p class="text-l">community ↗</p>
                            </div>
                        </a>
                        <a id="nav-item"
                            href="https://github.com/rnbwdev/rnbw"
                            target="_blank"
                            class="align-center justify-start padding-l gap-m radius-s background-primary border">
                            <svg-icon
                                src="images/githubgradient.svg"
                                class="icon-s"></svg-icon>
                            <div>
                                <p class="text-l">GitHub ↗</p>
                            </div>
                        </a>
                </div>
`;

class RnbwNav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = navTemplate;
  }

  connectedCallback() {
    this.applyHoverEffect();
  }

  applyHoverEffect() {
    const navItems = this.querySelectorAll("#nav-item");

    navItems.forEach((navItem) => {
      navItem.addEventListener("mouseover", function () {
        navItem.classList.add("background-secondary");
      });

      navItem.addEventListener("mouseout", function () {
        navItem.classList.remove("background-secondary");
      });
    });
  }
}

customElements.define("rnbw-nav", RnbwNav);
