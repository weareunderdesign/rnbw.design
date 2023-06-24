const rnbwKeyboardTemplate = `
<div class="page" id="keyboard-wrapper">
<img class="dark keyboard" src="images/keyboard-dark-j.svg" />
<img class="dark keyboard hidden" src="images/keyboard-dark-a.svg" />
<img class="dark keyboard hidden" src="images/keyboard-dark-w.svg" />

<img class="light keyboard" src="images/keyboard-light-j.svg" />
<img class="light keyboard hidden" src="images/keyboard-light-a.svg" />
<img class="light keyboard hidden" src="images/keyboard-light-w.svg" />

<div
  class="background-secondary box align-center radius-s border padding-xl hidden-on-mobile"
  style="min-height: 600px"
>
  <div class="row shadow background-primary radius-s box-s border">
    <div class="gap-m border-bottom padding-m justify-stretch box-l">
      <div class="gap-s column">
        <div class="justify-start gap-s padding-s">
          <div>
            <span class="text-l opacity-m" id="anim-1"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="column align-stretch box-l padding-m">
      <div class="column align-stretch">
        <div class="padding-m gap-s">
          <span class="text-s opacity-m">Project</span>
        </div>
        <div
          class="justify-stretch padding-s background-secondary radius-xs"
        >
          <div class="gap-s align-center">
            <div class="padding-xs">
              <svg-icon
                src="https://raincons.rnbw.dev/icons/plus.svg"
              ></svg-icon>
            </div>
            <span class="text-m">Add</span>
          </div>
          <div class="gap-s">
            <span class="text-m">A</span>
          </div>
        </div>
        <div class="justify-stretch padding-s">
          <div class="gap-s align-center">
            <div class="padding-xs">
              <svg-icon
                src="https://raincons.rnbw.dev/icons/code-html.svg"
              ></svg-icon>
            </div>
            <span class="text-m">Code</span>
          </div>
          <div class="gap-s">
            <span class="text-m">C</span>
          </div>
        </div>
        <div class="justify-stretch padding-s">
          <div class="gap-s align-center">
            <div class="padding-xs">
              <svg-icon
                src="https://raincons.rnbw.dev/icons/play.svg"
              ></svg-icon>
            </div>
            <span class="text-m">Run</span>
          </div>
          <div class="gap-s">
            <span class="text-m">R</span>
          </div>
        </div>
        <div class="justify-stretch padding-s">
          <div class="gap-s align-center">
            <div class="padding-xs">
              <svg-icon
                src="https://raincons.rnbw.dev/icons/edit.svg"
              ></svg-icon>
            </div>
            <span class="text-m">Design</span>
          </div>
          <div class="gap-s">
            <span class="text-m">/</span>
          </div>
        </div>
        <div class="justify-stretch padding-s opacity-m">
          <div class="gap-s align-center">
            <div class="padding-xs">
              <svg-icon
                src="https://raincons.rnbw.dev/icons/cloud-upload.svg"
              ></svg-icon>
            </div>
            <span class="text-m">Publish</span>
          </div>
          <div class="gap-s">
            <span class="text-m">P</span>
          </div>
        </div>
        <div class="justify-stretch padding-s opacity-m">
          <div class="gap-s align-center">
            <div class="padding-xs">
              <svg-icon
                src="https://raincons.rnbw.dev/icons/share.svg"
              ></svg-icon>
            </div>
            <span class="text-m">Share</span>
          </div>
          <div class="gap-s">
            <span class="text-m">O</span>
          </div>
        </div>
      </div>
      <div>
        <div class="justify-stretch padding-s">
          <div class="gap-s align-center">
            <span class="text-s opacity-m">Actions</span>
          </div>
        </div>

        <div class="justify-stretch padding-s">
          <div class="gap-s align-center">
            <div class="padding-xs">
              <svg-icon
                src="https://raincons.rnbw.dev/icons/copy.svg"
              ></svg-icon>
            </div>
            <span class="text-m">Cut</span>
          </div>
        </div>
        <div class="justify-stretch padding-s">
          <div class="gap-s align-center">
            <div class="padding-xs">
              <svg-icon
                src="https://raincons.rnbw.dev/icons/copy.svg"
              ></svg-icon>
            </div>
            <span class="text-m">Copy</span>
          </div>
        </div>
        <div class="justify-stretch padding-s">
          <div class="gap-s align-center">
            <div class="padding-xs">
              <svg-icon
                src="https://raincons.rnbw.dev/icons/copy.svg"
              ></svg-icon>
            </div>
            <span class="text-m">Paste</span>
          </div>
        </div>
      </div>
      <div>
        <div class="justify-stretch padding-s">
          <div class="gap-s align-center">
            <span class="text-s opacity-m">Other</span>
          </div>
        </div>
        <div class="justify-stretch padding-s">
          <div class="gap-s align-center">
            <div class="padding-xs">
              <svg-icon
                src="https://raincons.rnbw.dev/icons/component.svg"
              ></svg-icon>
            </div>
            <span class="text-m">Create component</span>
          </div>
        </div>
        <div class="justify-stretch padding-s">
          <div class="gap-s align-center">
            <div class="padding-xs">
              <svg-icon
                src="https://raincons.rnbw.dev/icons/cross.svg"
              ></svg-icon>
            </div>
            <span class="text-m">Remove unused styles</span
            ><span class="text-m">(28)</span>
          </div>
        </div>
        <div class="justify-stretch padding-s">
          <div class="gap-s align-center">
            <div class="padding-xs">
              <svg-icon
                src="https://raincons.rnbw.dev/icons/copy.svg"
              ></svg-icon>
            </div>
            <span class="text-m">Copy class names</span>
          </div>
        </div>
      </div>
    </div>
    <div class="box-l row align-stretch"></div>
  </div>
  </div>
</div>`;

class RnbwKeyobard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = rnbwKeyboardTemplate;
  }
}

customElements.define("rnbw-keyboard", RnbwKeyobard);
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const rnbwKeyboardElement = document.querySelector("rnbw-keyboard");

  const observer = new IntersectionObserver(toggleOnIntersect, options);
  let keyboardToggleIntervalId = "";
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "data-theme") {
        i = 0;
        clearInterval(keyboardToggleIntervalId);
        keyboardToggleIntervalId = setInterval(toggleVisibility, 1500);
      }
    });
  });

  mutationObserver.observe(document.querySelector("html"), {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  let target = document.getElementById("keyboard-wrapper");
  observer.observe(target);

  let i = 0;

  const textArr = ["Jumpstart Menu", "Add something", "Do something"];
  async function type(text) {
    const animationSpan = rnbwKeyboardElement.querySelector("#anim-1");
    animationSpan.textContent = "";
    const typingDelay = 100;
    for (let i = 0; i < text.length; i++) {
      animationSpan.textContent += text.charAt(i);
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * typingDelay)
      );
    }
  }

  let delay = 0;
  function toggleVisibility() {
    //find the current theme
    let theme = document.querySelector("html").dataset.theme;
    let keyboards = document.querySelectorAll(`.${theme}.keyboard`);

    for (let j = 0; j < keyboards.length; j++) {
      if (j === i) {
        keyboards[j].classList.remove("hidden");
      } else {
        keyboards[j].classList.add("hidden");
      }
    }
    type(textArr[i]);
    i = (i + 1) % keyboards.length;
  }

  function toggleOnIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        keyboardToggleIntervalId = setInterval(toggleVisibility, 1500);
        observer.unobserve(entry.target);
      }
    });
  }
});
