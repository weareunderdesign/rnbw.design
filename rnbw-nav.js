const navTemplate = `
                <div class="direction-column box-l gap-m">
                    <div class="box">
                        <a id="nav-item"
                            href="https://rnbw.company/signup"
                            target="_blank"
                            class="padding-l gap-m radius-s background-primary border">
                            <svg-icon
                                src="https://raincons.rnbw.dev/icons/oval.svg"
                                class="icon-m"></svg-icon>
                            <div>
                                <span class="text-l">start ↗</span>
                                <p class="text-s">get it going with rnbw.</p>
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a id="nav-item"
                            href="https://github.com/rnbwdev/rnbw"
                            target="_blank"
                            class="padding-l gap-m radius-s background-primary border">
                            <svg-icon
                                src="https://raincons.rnbw.dev/icons/github.svg"
                                class="icon-m"></svg-icon>
                            <div>
                                <span class="text-l">GitHub ↗</span>
                                <p class="text-s">
                                    contribute or make it yours.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a id="nav-item"
                            href="https://guide.rnbw.dev/"
                            target="_blank"
                            class="padding-l gap-m radius-s background-primary border">
                            <svg-icon
                                src="https://raincons.rnbw.dev/icons/library.svg"
                                class="icon-m"></svg-icon>
                            <div>
                                <span class="text-l">guide ↗</span>
                                <p class="text-s">learn how to use.</p>
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a id="nav-item"
                            href="https://discord.gg/HycXz8TJkd/"
                            target="_blank"
                            class="padding-l gap-m radius-s background-primary border">
                            <svg-icon
                                src="https://raincons.rnbw.dev/icons/people.svg"
                                class="icon-m"></svg-icon>
                            <div>
                                <span class="text-l">community ↗</span>
                                <p class="text-s">be part of it.</p>
                            </div>
                        </a>
                    </div>
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

