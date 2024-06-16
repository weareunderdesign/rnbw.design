const rnbwMapTemplate = `
<div class="row box border radius-s border" style="min-height: 600px">
  <style>
  .shortcut{
    width: 3.5rem;
    margin-left: 0.5rem;
  }
  .shortcutbox{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  </style>
  <div
    id="anim4"
    class="hidden-on-mobile column  panel justify-stretch gap-xl border-right"
  >
    <div>
      <div class="border-bottom padding-m shortcutbox">
        <a href="https://rnbw.company/quick-start#guide-files" style="width: 65%; padding-right: 0.5rem;">
          <span class="text-l">
            <div style="display: flex; align-items: center;" class="gap-s">
              <span class="padding-xs background-secondary radius-s border">
                1.2
              </span>
              Files
            </div>
          </span>
          <p class="text-s">Navigate files and subfolders.</p>
        </a>
        <div style="width: 70px; height: 70px;">
        <svg-icon src="https://rnbw.company/images/files.svg"></svg-icon>
        </div>
      </div>
      <div class="border-bottom padding-m box shortcutbox">
        <a href="https://rnbw.company/quick-start#elements" style="width: 65%; padding-right: 0.5rem;">
          <span class="text-l">
            <div style="display: flex; align-items: center;" class="gap-s">
              <span class="padding-xs background-secondary radius-s border">
                1.3
              </span>
              Elements
            </div>
          </span>
          <p class="text-s">
            View and control objects in a hierarchical manner
          </p>
        </a>
        <div style="width: 70px; height: 70px;">
        <svg-icon src="https://rnbw.company/images/open.svg"></svg-icon>
        </div>
      </div>
    </div>
    <div>
      <div class="padding-m gap-s border-bottom opacity-l">
        <a href="https://rnbw.company/quick-start#settings" style="width: 65%; padding-right: 0.5rem;">
          <span class="text-l">
            <div style="display: flex; align-items: center;" class="gap-s">
              <span class="padding-xs background-secondary radius-s border">
                1.4
              </span>
              Settings
            </div>
          </span>
          <p class="text-s">Control the properties and values of nodes..</p>
        </a>
      </div>
      <div class="padding-m gap-s opacity-l">
        <a>
          <span class="text-l">Styles</span>
          <p class="text-s">Apply and create styles for your elements.</p>
        </a>
      </div>
    </div>
  </div>
  <div class="box-s column gap-m padding-m">
    <div class="shortcutbox">
    <div class="column gap-m">
    <svg-icon
      class="opacity-xl"
      src="https://rnbw.company/images/shapes.svg"
    ></svg-icon>
    <a id="anim2" href="https://rnbw.company/quick-start#design">
      <span class="text-l">
        <span class="padding-xs background-secondary radius-s border">1.5</span>
        Design
      </span>
      <p class="text-s">
        Visualize and manipulate objects and their composition.
      </p>
    </a>
    </div>
    <div style="width: 70px; height: 70px;">
        <svg-icon src="https://rnbw.company/images/toggle.svg"></svg-icon>
        </div>
    </div>
    <div
      id="anim1"
      class="row border radius-s box-s align-stretch"
      style="align-self: center;"
    >
      <div class="box-l padding-m border-bottom shortcutbox">
        <a href="https://rnbw.company/quick-start#jumpstart" style="width: 150px; min-height:70px;">
          <span class="text-l">
            <div style="display: flex; align-items: center;" class="gap-s">
              <span class="padding-xs background-secondary radius-s border">
                1.1
              </span>
              Jumpstart
            </div>
          </span>
          <p class="text-s">
            Start and open projects, control settings and get help.
          </p>
        </a>
        <div style="width: 70px; height: 70px;">
        <svg-icon src="https://rnbw.company/images/jumpstart.svg"></svg-icon>
        </div>
      </div>
      <div class="border-bottom box-l padding-m shortcutbox">
        <a href="https://rnbw.company/quick-start#add-something" style="width: 150px; min-height:70px;">
          <span class="text-l">
            <div style="display: flex; align-items: center;" class="gap-s">
              <span class="padding-xs background-secondary radius-s border">
                1.6
              </span>
              Add something
            </div>
          </span>
          <p class="text-s">Add different things in different contexts.</p>
        </a>
        <div style="width: 70px; height: 70px;">
        <svg-icon src="https://rnbw.company/images/add.svg"></svg-icon>
        </div>
      </div>
      <div class="box-l padding-m border-bottom shortcutbox">
        <a href="https://rnbw.company/quick-start#do-something" style="width: 150px; min-height:70px;">
          <span class="text-l">
            <div style="display: flex; align-items: center;" class="gap-s">
              <span class="padding-xs background-secondary radius-s border">
                1.7
              </span>
              Do something
            </div>
          </span>
          <p class="text-s">All of the actions offered by rnbw.</p>
        </a>
        <div style="width: 70px; height: 70px;">
        <svg-icon src="https://rnbw.company/images/do.svg"></svg-icon>
        </div>
      </div>
      <div class="box-l padding-m shortcutbox">
        <a href="https://rnbw.company/quick-start#ask-something" style="width: 150px; min-height:70px;">
          <span class="text-l">
            <div style="display: flex; align-items: center;" class="gap-s">
              <span class="padding-xs background-secondary radius-s border">
                1.8
              </span>
              Ask something
            </div>
          </span>
          <p class="text-s">let AI do the work and unleash your creativity.</p>
        </a>
        <div style="width: 70px; height: 70px;">
        <svg-icon src="https://rnbw.company/images/ask.svg"></svg-icon>
        </div>
      </div>
    </div>
  </div>
  <div
    id="anim3"
    class="hidden-on-mobile box border-left padding-m border-left shortcutbox"
  >
    <a href="https://rnbw.company/quick-start#code">
      <span class="text-l">
        <span class="padding-xs background-secondary radius-s border">1.9</span>
        Code
      </span>
      <p class="text-s">Edit your code. The real thing.</p>
    </a>
    <div style="width: 70px; height: 70px;">
    <div style="width: 70px; height: 70px;">
        <svg-icon src="https://rnbw.company/images/code.svg"></svg-icon>
        </div>
    </div>
  </div>
</div>
`;

class RnbwMap extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = rnbwMapTemplate;
    updateThemeElementsVisibility();
  }
}

customElements.define("rnbw-map", RnbwMap);

document.addEventListener("DOMContentLoaded", () => {
  const rnbwMapElement = document.querySelector("rnbw-map");
  const fadeInSections = rnbwMapElement.querySelectorAll("div");

  // Add CSS styles
  const style = document.createElement("style");
  style.innerHTML = `
    rnbw-map div {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s, transform 0.5s;
    }

    rnbw-map div.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  const fadeInOnScroll = (entries, observer) => {
    let delay = 0;

    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      setTimeout(() => {
        entry.target.classList.add("is-visible");      
      }, delay);

      delay += 250;
      observer.unobserve(entry.target);
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(fadeInOnScroll, options);
  fadeInSections.forEach((section) => {
    observer.observe(section);
  });

});

