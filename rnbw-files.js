const rnbwFiles = `
<div class="hidden-on-mobile row radius-s border" style="position:relative; min-height:600px;">
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
      <div class="justify-stretch padding-xs" id="anim-2">
      <div class="justify-start gap-s padding-xs" style="display: flex; align-items: center;">
        <div class="icon-xs"></div>
        <svg-icon src="https://raincons.rnbw.dev/icons/brush.svg"></svg-icon>
        <span class="text-s">Stylesheet</span>
        <div class="radius-s foreground-primary" style="
            width: 6px;
            height: 6px;
            margin-bottom: -0.116vw;
        "></div>
        </div>
      </div>
      <div class="justify-stretch padding-xs" id="anim-3">
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
<div class="box align-stretch" style="display: flex;">
  <div id="image-container" class="gap-m row align-center justify-center" style="flex-grow: 1;">
  <style>
    .svg-image{
      width: 12.27rem; 
      height: 13.36rem;
    }
  </style>
    <img src="images/HTMLfolder.svg" class="svg-image">
    <img src="images/CSSfolder.svg" class="svg-image">
    <img src="images/JSfolder.svg" class="svg-image">
  </div>
    <div
      class="box-xs row padding-l border-left background-primary opacity-m"
      style="opacity:1; flex-grow: 0; flex-shrink: 0; width: 40%;"
    >
      <code id="code_text_block">
      </code>
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

  var spanElement = document.querySelector('.box h3 span');
  // spanElement.textContent += " by adopting open standards and using files as the core, you can easily open and edit any HTML/CSS/JS project visually, enjoying the benefits of files without the 'meh'.";

  const сodeTextElement = document.getElementById("code_text_block");
  const codeStrings = [
    ["&lt;div class=\"box align-stretch padding-m column\"&gt;", 
    "&lt;div class=\"box gap-m row\"&gt;", 
    "&lt;img class=\"svg-image\"&gt;", 
    "&lt;img class=\"svg-image\"&gt;", 
    "&lt;img class=\"svg-image\"&gt;", 
    "&lt;/div&gt;", 
    "&lt;h3&gt;", 
    "&lt;span&gt;", 
    "&lt;/span&gt;", 
    "&lt;/h3&gt;", 
    "&lt;/div&gt;"],
    ["&lt;style&gt;", 
    ".svg-image{", 
    "width: 13.64vw;", 
    "height: 14.85vw;", 
    "}", 
    "&lt;/style&gt;"], 
    ["const getAnims = () => {", 
    "let anim1 = rnbwFilesElement.querySelector(\"#anim-1\");", 
    "let anim2 = rnbwFilesElement.querySelector(\"#anim-2\");", 
    "let anim3 = rnbwFilesElement.querySelector(\"#anim-3\");", 
    "return { anim1, anim2, anim3 };", 
    "};"] 
  ];
  
  const marginValues = [
    ["0rem", "0.578rem", "1.156rem", "1.156rem", "1.156rem", "0.578rem", "0.578rem", "1.156rem", "1.156rem", "0.578rem", "0rem"],
    ["0rem", "0.578rem", "1.156rem", "1.156rem", "0.578rem", "0rem"],
    ["0rem", "0.578rem", "0.578rem", "0.578rem", "0.578rem", "0rem"]
];
    
  сodeTextElement.innerHTML = codeStrings[0].map((item, index) => {
    return `<div style="margin-left: ${marginValues[0][index]};">${item}</div>`;
  }).join(' ');

  const images = rnbwFilesElement.querySelectorAll(".svg-image");

  images.forEach((image, index) => {
    if (index === 0) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });

  const getAnims = () => {
    let anim1 = rnbwFilesElement.querySelector("#anim-1");
    let anim2 = rnbwFilesElement.querySelector("#anim-2");
    let anim3 = rnbwFilesElement.querySelector("#anim-3");
    return { anim1, anim2, anim3 };
  };

  const { anim1 } = getAnims();
  let delay = 650;
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
          сodeTextElement.innerHTML = codeStrings[1].map((item, index) => {
            return `<div style="margin-left: ${marginValues[1][index]};">${item}</div>`;
          }).join(' ');
          images[0].style.display = "none";
          images[1].style.display = "block";
          anim1.classList.remove("background-secondary");
          anim2.classList.add("background-secondary");
          setTimeout(() => {
            сodeTextElement.innerHTML = codeStrings[2].map((item, index) => {
              return `<div style="margin-left: ${marginValues[2][index]};">${item}</div>`;
            }).join(' ');
            images[1].style.display = "none";
            images[2].style.display = "block";
            anim2.classList.remove("background-secondary");
            anim3.classList.add("background-secondary");
            setTimeout(() => {
              сodeTextElement.innerHTML = codeStrings[1].map((item, index) => {
                return `<div style="margin-left: ${marginValues[1][index]};">${item}</div>`;
              }).join(' ');
              images[2].style.display = "none";
              images[1].style.display = "block";
              anim3.classList.remove("background-secondary");
              anim2.classList.add("background-secondary");
              setTimeout(() => {
                сodeTextElement.innerHTML = codeStrings[0].map((item, index) => {
                  return `<div style="margin-left: ${marginValues[0][index]};">${item}</div>`;
                }).join(' ');
                images[1].style.display = "none";
                images[0].style.display = "block";
                anim2.classList.remove("background-secondary");
                anim1.classList.add("background-secondary");
                delay += 750;
                reset();
              }, delay);
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
      anim1.classList.add("background-secondary");
      anim2.classList.remove("background-secondary");
      anim3.classList.remove("background-secondary");
    }, 650);
    setTimeout(() => {
      delay = 650;
      setTimeout(() => {
        observer.observe(anim1);
      }, 650);
    }, 750);
  }
});



// inverting folders images

function checkDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
const images = document.querySelectorAll('#image-container img');

function checkDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function invertImages() {
  images.forEach(image => {
    if (checkDarkMode()) {
      image.style.filter = 'invert(1)';
    } else {
      image.style.filter = 'none';
    }
  });
}

invertImages();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  invertImages();
});