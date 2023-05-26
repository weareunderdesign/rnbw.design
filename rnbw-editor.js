const rnbwEditor = `
<div class="hidden-on-mobile row radius-s border padding-m gap-m border"
style="min-height: 600px">
<div class="panel justify-stretch background-primary radius-s border">
    <div class="panel">
        <div class="justify-stretch padding-s border-bottom">
            <div class="gap-s align-center">
                <div class="radius-m icon-s align-center background-secondary"></div>
                <span class="text-s opacity-m">/</span>
                <div class="gap-s align-center radius-s">
                    <div class="radius-m icon-s align-center background-secondary"></div>
                    <span class="text-s">Project</span>
                </div>
                <span class="text-s opacity-m">/</span><span class="text-s">...</span><span
                    class="text-s opacity-m">/</span>
                <svg-icon src="https://raincons.rnbw.dev/icons/page.svg"></svg-icon>
                <span class="text-s">File</span>
            </div>
        </div>
        <div class="border-bottom">
            <div class="justify-stretch padding-xs">
                <div class="gap-s padding-xs">
                    <div class="icon-xs"></div>
                    <svg-icon src="https://raincons.rnbw.dev/icons/image.svg"></svg-icon>
                    <span class="text-s">Image</span>
                </div>
            </div>
            <div class="justify-stretch padding-xs">
                <div class="gap-s padding-xs">
                    <svg-icon src="https://raincons.rnbw.dev/icons/down.svg"></svg-icon>
                    <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                    <span class="text-s">Div</span>
                </div>
            </div>
            <div>
                <div class="justify-stretch padding-xs">
                    <div class="gap-s padding-xs">
                        <div class="icon-xs"></div>
                        <svg-icon src="https://raincons.rnbw.dev/icons/down.svg"></svg-icon>
                        <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                        <span class="text-s">Element</span>
                    </div>
                </div>
                <div>
                    <div class="justify-stretch padding-xs background-secondary" id="logo">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/image.svg"></svg-icon>
                            <span class="text-s">Logo</span>
                        </div>
                    </div>
                    <div class="justify-stretch padding-xs background-secondary hide" id="anim4">
                         <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/down.svg"></svg-icon>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Div</span>
                        </div>
                    </div>
                    <div class="justify-stretch padding-xs">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/right.svg"></svg-icon>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Element</span>
                        </div>
                    </div>
                    <div class="justify-stretch padding-xs">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Element</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="justify-stretch padding-xs">
                <div class="gap-s padding-xs">
                    <div class="icon-xs"></div>
                    <svg-icon src="https://raincons.rnbw.dev/icons/right.svg"></svg-icon>
                    <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                    <span class="text-s">Element</span>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="padding-m gap-s panel border-bottom">
            <div class="justify-stretch">
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
                <div class="gap-s box justify-start">
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
                <div class="gap-s box justify-start">
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
                <div class="gap-s box justify-start">
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

<div class="box column gap-m">
    <h4 class="border">
        "The first web browser was also an editor. The idea
        being that not only could everyone read content on
        the web, but they could also help create it. It was
        to be a collaborative space for everyone."
        <br>
    </h4>
    <i>Sir Tim Berners-Lee</i>
    <div class="gap-s column box-s">
        <div class="box-l size-dropdown gap-xs padding-s" >
            <p class="opacity-m anim" id="anim1">/</p>
        
        </div>
        <div class="size-dropdown shadow column radius-xs background-primary border anim" id="anim2">
            <div class="border-bottom box-l column" id ="anim3">
                <div class="padding-s background-secondary-onhover row gap-s box-l">
                    <svg-icon src="https://raincons.rnbw.dev/icons/code-js.svg"></svg-icon>
                    <span class="text-s">Page</span>
                </div>
                <div class="padding-s background-secondary-onhover row gap-s box-l" id="filtered-option">
                    <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                    <span class="text-s">Div</span>
                </div>
                <div class="padding-s background-secondary-onhover row gap-s box-l">
                    <svg-icon src="https://raincons.rnbw.dev/icons/text.svg"></svg-icon>
                    <span class="text-s">Span</span>
                </div>
                <div class="padding-s background-secondary-onhover row gap-s box-l">
                    <svg-icon src="https://raincons.rnbw.dev/icons/image.svg"></svg-icon>
                    <span class="text-s">Image</span>
                </div>
                <div class="padding-s background-secondary-onhover row gap-s box-l">
                    <svg-icon src="https://raincons.rnbw.dev/icons/link.svg"></svg-icon>
                    <span class="text-s">Link</span>
                </div>
            </div>
            <div class="box-l column">
                <div class="padding-s justify-start">
                    <div class="gap-s align-center">
                        <svg-icon src="https://raincons.rnbw.dev/icons/bullet.svg"></svg-icon>
                        <div class="text-s">
                            <span class="text-m">Create...</span>
                        </div>
                    </div>
                </div>
                <div class="padding-s justify-start">
                    <div class="gap-s align-center">
                        <svg-icon src="https://raincons.rnbw.dev/icons/brush.svg"></svg-icon>
                        <div class="text-s">
                            <span class="opacity-m text-m">Stylesheet1/</span><span
                                class="text-m">Style1</span>
                        </div>
                    </div>
                </div>
                <div class="padding-s justify-start">
                    <div class="gap-s align-center">
                        <svg-icon src="https://raincons.rnbw.dev/icons/component.svg"></svg-icon>
                        <span class="text-m">Component 1</span>
                    </div>
                </div>
                <div class="gap-s padding-s">
                    <div class="gap-s align-center">
                        <div class="text-s">
                            <span class="opacity-m text-m">images/</span><span
                                class="text-m">image1.png</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;

class RnbwEditor extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = rnbwEditor;
  }
}

customElements.define("rnbw-editor", RnbwEditor);
// Add CSS styles
const style = document.createElement("style");
style.innerHTML = `
    rnbw-editor .anim {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s, transform 0.5s;
    }

    rnbw-editor .hide{
        display: none;
        transition: opacity 0.5s, transform 0.5s;
    }


    rnbw-editor .anim.is-visible {
        opacity: 1;
        transform: translateY(0);
        }

  `;
document.head.appendChild(style);
document.addEventListener("DOMContentLoaded", () => {
  const rnbwMapElement = document.querySelector("rnbw-editor");

  let anim1Div = rnbwMapElement.querySelectorAll("#anim1")[0];
  let anim2Div = rnbwMapElement.querySelectorAll("#anim2")[0];
  let anim3Div = rnbwMapElement.querySelectorAll("#anim3")[0];
  let anim4Div = rnbwMapElement.querySelectorAll("#anim4")[0];

  const fadeInSections = [anim1Div, anim2Div, anim3Div];

  let delay = 0;
  let charIndex = 0;
  let index = 0;

  const fadeInOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      setTimeout(async () => {
        await entry.target.classList.add("is-visible");
        if (entry.target.id == "anim2") {
          type();
          filterAndSelectDiv();
        }
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

  let anim1 = document.querySelectorAll("rnbw-editor #anim1");
  anim1.forEach((span) => span.setAttribute("data-text", "/d"));
  anim1.forEach((span) => (span.textContent = "/"));

  function type() {
    if (index < anim1.length) {
      anim1[index].classList.remove("hidden");
      const originalText = anim1[index].getAttribute("data-text");
      if (charIndex < originalText.length) {
        anim1[index].textContent = originalText.slice(0, charIndex + 1);
        charIndex++;

        setTimeout(type, delay);
        delay += 30;
      } else {
        charIndex = 0;
        index++;
        setTimeout(type, delay);
        delay += 30;
      }
    }
  }

  function filterAndSelectDiv() {
    let anim3DivChildren = anim3Div.children;
    for (let i = 0; i < anim3DivChildren.length; i++) {
      if (anim3DivChildren[i].id == "filtered-option") {
        setTimeout(() => {
          anim3DivChildren[i].classList.add("background-secondary");
        }, delay);
        delay += 250;
        continue;
      }
      setTimeout(() => {
        anim3DivChildren[i].classList.add("hide");
      }, delay);
      delay += 50;
    }

    delay += 1000;
    setTimeout(() => {
      anim1Div.classList.add("hide");
      anim2Div.classList.add("hide");
      document.getElementById("logo").classList.add("background-secondary");
      anim4Div.classList.remove("hide");
    }, delay);
  }
  fadeInSections.forEach((section) => {
    observer.observe(section);
  });
});
