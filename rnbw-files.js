const rnbwFiles = `
<div class="hidden-on-mobile row radius-s border">
<div class="panel justify-stretch border-right">
  <div class="panel">
    <div class="justify-stretch padding-s border-bottom">
      <div class="gap-s align-center">
        <div
          class="radius-m icon-s align-center background-secondary"
        ></div>
        <span class="text-s opacity-m">/</span>
        <div class="gap-s align-center radius-s">
          <div
            class="radius-m icon-s align-center background-secondary"
          ></div>
          <span class="text-s">Project</span>
        </div>
      </div>
    </div>
    <div id="reset">
      <div class="justify-stretch padding-xs background-secondary" id="anim-1">
        <div class="gap-s padding-xs">
          <div class="icon-xs"></div>
          <svg-icon
            src="https://raincons.rnbw.dev/icons/page.svg"
          ></svg-icon>
          <span class="text-s">Page</span>
        </div>
        <div class="row"></div>
      </div>
      <div class="justify-stretch padding-xs">
        <div class="justify-start gap-s padding-xs">
          <div class="icon-xs"></div>
          <svg-icon
            src="https://raincons.rnbw.dev/icons/brush.svg"
          ></svg-icon>
          <span class="text-s">Stylesheet</span>
          <div
            class="radius-s foreground-primary"
            style="width: 6px; height: 6px"
          ></div>
        </div>
      </div>
      <div class="justify-stretch padding-xs" id="anim-2">
        <div class="gap-s padding-xs">
          <div class="icon-xs"></div>
          <svg-icon
            src="https://raincons.rnbw.dev/icons/code-js.svg"
          ></svg-icon>
          <span class="text-s">Script</span>
        </div>
        <div class="row"></div>
      </div>
      <div class="gap-s justify-start padding-s">
        <div class="icon-xs"></div>
        <svg-icon
          src="https://raincons.rnbw.dev/icons/component.svg"
        ></svg-icon>
        <span class="text-s">Component</span>
      </div>
      <div>
        <div>
          <div class="gap-s justify-start padding-s">
            <svg-icon
              src="https://raincons.rnbw.dev/icons/down.svg"
            ></svg-icon>
            <svg-icon
              src="https://raincons.rnbw.dev/icons/folder.svg"
            ></svg-icon>
            <span class="text-s">Folder</span>
          </div>
        </div>
        <div>
          <div class="gap-s justify-start padding-s">
            <div class="icon-xs"></div>
            <div class="icon-xs"></div>
            <svg-icon
              src="https://raincons.rnbw.dev/icons/brush.svg"
            ></svg-icon>
            <span class="text-s">Stylesheet</span>
          </div>
        </div>
        <div>
          <div class="gap-s justify-start padding-s">
            <div class="icon-xs"></div>
            <div class="icon-xs"></div>
            <svg-icon
              src="https://raincons.rnbw.dev/icons/code-js.svg"
            ></svg-icon>
            <span class="text-s">Script</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="box align-stretch padding-m">
  <div class="box gap-m row">
    <h2>
      <span
        >by adopting open standards and using files as the core, you
        can easily open and edit any HTML/CSS/JS project visually,
        enjoying the benefits of files without the "meh".
      </span>
    </h2>
    <div
      class="padding-l border-left background-primary radius-s border opacity-m"
      style="opacity:0;"
      id="anim-3"
    >
      <code>
      const tryMeBtn = document.getElementById("try_me");
      </code>
      <code>
      tryMeBtn.addEventListener("click", () => {
       window.location.href = "https://rnbw.dev";
      });
      </code>
    </div>
  </div>
</div>
</div>
`;

class RnbwFiles extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = rnbwFiles;
  }
}

customElements.define("rnbw-files", RnbwFiles);

document.addEventListener("DOMContentLoaded", function () {
  const rnbwFilesElement = document.querySelector("rnbw-files");

  const getAnims = () => {
    let anim1 = rnbwFilesElement.querySelectorAll("#anim-1")[0];
    let anim2 = rnbwFilesElement.querySelectorAll("#anim-2")[0];
    let anim3 = rnbwFilesElement.querySelectorAll("#anim-3")[0];
    return { anim1, anim2, anim3 };
  };

  const { anim1 } = getAnims();
  let delay = 250;
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(animateOnIntersect, options);
  observer.observe(anim1);

  function animateOnIntersect(entries, observer) {
    const { anim1, anim2, anim3 } = getAnims();
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          anim1.classList.remove("background-secondary");
          anim2.classList.add("background-secondary");
          anim3.style.opacity = 1;
          setTimeout(() => {
            setTimeout(() => {
              delay += 500;
              reset();
            }, delay);
          }, delay);
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }

  function reset() {
    const { anim1, anim2, anim3 } = getAnims();

    setTimeout(() => {
      anim3.style.opacity = 0;
      anim1.classList.add("background-secondary");
      anim2.classList.remove("background-secondary");
    }, 200);
    setTimeout(() => {
      delay = 250;
      setTimeout(() => {
        observer.observe(anim1);
      }, 500);
    }, 500);
  }
});
