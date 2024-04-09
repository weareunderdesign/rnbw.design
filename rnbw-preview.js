const rnbwPreviewTemplate = `
<div class="row radius-s border" id="rnbw-preview-wrapper"
    style="flex-direction:row; flex-wrap:nowrap; min-height:730px;">
    <div class="panel hidden-on-mobile justify-stretch border-right">
        <div class="panel">
            <div class="justify-stretch padding-s border-bottom">
                <div class="gap-s align-center">
                    <div class="radius-m icon-s align-center background-secondary"></div>
                    <span class="text-s opacity-m">/</span>
                    <div class="gap-s align-center radius-s">
                        <div class="radius-m icon-s align-center background-secondary"></div>
                        <span class="text-s">Project</span>
                    </div>
                </div>
            </div>
            <div class="border-bottom">
                <div class="justify-stretch padding-xs">
                    <div class="gap-s padding-xs">
                        <div class="icon-xs"></div>
                        <svg-icon src="https://raincons.rnbw.dev/icons/page.svg"></svg-icon>
                        <span class="text-s">Page</span>
                    </div>
                    <div class="row"></div>
                </div>
                <div class="justify-stretch padding-xs">
                    <div class="justify-start gap-s padding-xs">
                        <div class="icon-xs"></div>
                        <svg-icon src="https://raincons.rnbw.dev/icons/brush.svg"></svg-icon>
                        <span class="text-s">Stylesheet</span>
                        <div class="radius-s foreground-primary" style="
                            width: 6px;
                            height: 6px;
                        "></div>
                    </div>
                </div>
                <div class="justify-stretch padding-xs">
                    <div class="gap-s padding-xs">
                        <div class="icon-xs"></div>
                        <svg-icon src="https://raincons.rnbw.dev/icons/code-js.svg"></svg-icon>
                        <span class="text-s">Script</span>
                    </div>
                    <div class="row"></div>
                </div>
                <div class="gap-s justify-start padding-s">
                    <div class="icon-xs"></div>
                    <svg-icon src="https://raincons.rnbw.dev/icons/component.svg"></svg-icon>
                    <span class="text-s">Component</span>
                </div>
                <div>
                    <div>
                        <div class="gap-s justify-start padding-s">
                            <svg-icon src="https://raincons.rnbw.dev/icons/down.svg"></svg-icon>
                            <svg-icon src="https://raincons.rnbw.dev/icons/folder.svg"></svg-icon>
                            <span class="text-s">Folder</span>
                        </div>
                    </div>
                    <div>
                        <div class="gap-s justify-start padding-s">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/brush.svg"></svg-icon>
                            <span class="text-s">Stylesheet</span>
                        </div>
                    </div>
                    <div>
                        <div class="gap-s justify-start padding-s">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/code-js.svg"></svg-icon>
                            <span class="text-s">Script</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-bottom">
                <div class="justify-stretch padding-xs background-tertiary">
                    <div class="gap-s padding-xs">
                        <svg-icon src="https://raincons.rnbw.dev/icons/down.svg" id="heading3-dropdown-icon"
                            class="hidden"></svg-icon>
                        <svg-icon src="https://raincons.rnbw.dev/icons/heading.svg"></svg-icon>
                        <span class="text-s">Heading 3</span>
                    </div>
                </div>

                <div>
                    <div class="justify-stretch padding-xs background-secondary" id="span1" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>
                    <div class="justify-stretch padding-xs background-secondary" id="span2" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span3" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span4" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span5" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span6" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span7" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div>
            <div class="padding-m gap-s panel border-bottom">
                <div class="justify-stretch align-center">
                    <span class="text-s">Settings</span>
                    <div class="row gap-s justify-end">
                        <div class="padding-xs radius-xs">
                            <svg-icon src="https://raincons.rnbw.dev/icons/plus.svg"></svg-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel padding-m gap-s">
                <div class="justify-stretch">
                    <div class="gap-s box">
                        <span class="text-s">Styles</span>
                    </div>
                    <div class="gap-s justify-end">
                        <div class="padding-xs radius-xs">
                            <svg-icon src="https://raincons.rnbw.dev/icons/plus.svg"></svg-icon>
                        </div>
                    </div>
                </div>
                <div class="gap-s">
                    <div class="gap-xs border radius-xs padding-xs">
                        <span class="text-s">Style1</span>
                    </div>
                    <div class="gap-xs border radius-xs padding-xs foreground-secondary">
                        <svg-icon src="https://raincons.rnbw.dev/icons/cross.svg"></svg-icon>
                        <span class="text-s">Style2</span>
                    </div>
                    <div class="padding-xs radius-xs">
                        <svg-icon src="https://raincons.rnbw.dev/icons/states.svg"></svg-icon>
                    </div>
                    <div class="background-secondary-onhover padding-xs radius-xs">
                        <svg-icon src="https://raincons.rnbw.dev/icons/media.svg"></svg-icon>
                    </div>
                </div>
                <div class="justify-stretch">
                    <div class="gap-s box justify-start align-center">
                        <div class="padding-xs radius-xs background-secondary">
                            <svg-icon src="https://raincons.rnbw.dev/icons/width.svg"></svg-icon>
                        </div>
                        <span class="text-s">Width</span>
                    </div>
                    <div class="gap-s">
                        <span class="text-s">24px</span>
                    </div>
                </div>
                <div class="justify-stretch opacity-m">
                    <div class="gap-s box justify-start align-center">
                        <div class="padding-xs radius-xs">
                            <svg-icon src="https://raincons.rnbw.dev/icons/flex.svg"></svg-icon>
                        </div>
                        <span class="text-s">Display</span>
                    </div>
                    <div class="row gap-s">
                        <span class="text-s">Flex</span>
                    </div>
                </div>
                <div class="justify-stretch">
                    <div class="gap-s box justify-start align-center">
                        <div class="padding-xs radius-xs background-secondary">
                            <svg-icon src="https://raincons.rnbw.dev/icons/relative.svg"></svg-icon>
                        </div>
                        <span class="text-s">Position</span>
                    </div>
                    <div class="row gap-s">
                        <span class="text-s">Relative</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="box-s gap-l column padding-m">
        <style>
            .hidden {
                display: none;
            }
        </style>
        <h3>
            <span class="hidden" style="color: #006400">rnbw 🌈 is a modern design and code editor 💻 .</span>
            <span class="hidden" style="color: #0000cd">it's simple, flexible, and open.</span>
            <span class="hidden" style="color: #800080">It works with your files.</span>
            <span class="hidden" style="color: #ee82ee">it's powered by the web.</span>
            <span class="hidden" style="color: #ff4500">it's open source.</span>
            <span class="hidden" style="color: #ffa500">it fully embraces open web standards.</span>
            <span class="hidden" style="color: #ffd700">and, it is powered by AI 🤖 ...</span>
        </h3>

    </div>
    <div class="box-s padding-l border-left background-primary radius-s border opacity-m" style="word-break: break-word;">
        <code>
            &lt;span style="color:#006400"&gt;rnbw is a modern design and code editor.&lt;/span&gt;
            &lt;span style="color:#0000CD"&gt;it's simple, flexible, and open.&lt;/span&gt;
            &lt;span style="color:#800080"&gt;it works with your files.&lt;/span&gt;
            &lt;span style="color:#EE82EE"&gt;it's powered by the web.&lt;/span&gt;
            &lt;span style="color:#FF4500"&gt;it's open source.&lt;/span&gt;
            &lt;span style="color:#FFA500"&gt;it fully embraces open web standards.&lt;/span&gt;
            &lt;span style="color:#FFD700"&gt;and, it is powered by AI...&lt;/span&gt;
        </code>
    </div>
</div>
`;

class RnbwPreview extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = rnbwPreviewTemplate;
  }
}

customElements.define("rnbw-preview", RnbwPreview);

document.addEventListener("DOMContentLoaded", function () {
  const rnbwPreviewElement = document.querySelector("rnbw-preview");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(animateOnIntersect, options);

  let text = "";
  function animateOnIntersect(entries, observer) {
    if (entries[0].isIntersecting) {
      observer.unobserve(rnbwPreviewElement);
      const h3 = document.querySelector("h3");
      const spans = h3.querySelectorAll("span");
      let index = 0;
      let charIndex = 0;

      function type() {
        if (index < spans.length) {
          spans[index].classList.remove("hidden");
          const originalText = spans[index].getAttribute("data-text");
          if (index === 0) {
            let heading3DropdownIcon = document.getElementById(
              "heading3-dropdown-icon"
            );
            heading3DropdownIcon.classList.remove("hidden");
          }
          if (charIndex < originalText.length) {
            spans[index].textContent = originalText.slice(0, charIndex + 1);
            charIndex++;
            setTimeout(type, 20);
          } else {
            charIndex = 0;
            index++;
            setTimeout(type, 800);
          }
        } else {
          setTimeout(() => {
            reset();
          }, 4000);
        }
      }
      const code = document.querySelector("code");
      if (!text) {
        text = code.textContent;
      }
      code.textContent = "";

      let i = 0;
      let spanCount = 1;
      let totalSpansAnimated = 0;
      let timer = 100;
      function typeCode() {
        if (i < text.length) {
          code.textContent += text.charAt(i);
          i++;
          if (text.charAt(i) === ".") {
            if (spanCount <= 7) {
              let element = document.getElementById("span" + spanCount);
              setTimeout(() => {
                element.style.opacity = 1;
                totalSpansAnimated++;
              }, timer);
              timer += 70;
              spanCount++;
            }
            setTimeout(typeCode, 70);
          } else {
            setTimeout(typeCode, 15); // adjust the delay time as needed
          }
        }
      }

      typeCode();
      spans.forEach((span) => span.setAttribute("data-text", span.textContent));
      spans.forEach((span) => (span.textContent = ""));
      type();
    }
  }
  function reset() {
    const spans = document.querySelectorAll("h3 span");
    spans.forEach((span) => span.classList.add("hidden"));

    let heading3DropdownIcon = document.getElementById(
      "heading3-dropdown-icon"
    );
    heading3DropdownIcon.classList.add("hidden");

    for (let i = 1; i <= 7; i++) {
      let element = document.getElementById("span" + i);
      element.style.opacity = 0;
    }
    const code = document.querySelector("code");
    code.textContent = "";
    observer.unobserve(rnbwPreviewElement);
    index = 0;
    charIndex = 0;
    i = 0;
    spanCount = 1;
    totalSpansAnimated = 0;
    timer = 1500;

    setTimeout(() => {
      observer.observe(rnbwPreviewElement);
    }, 1500);
  }

  observer.observe(rnbwPreviewElement);
});
