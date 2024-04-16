const rnbwPreviewTemplate = `
<div class="row radius-s border" id="rnbw-preview-wrapper"
    style="flex-direction:row; flex-wrap:nowrap; min-height:850px;">
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
            <div class="">
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

                    <div class="justify-stretch padding-xs background-secondary" id="span10" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Image</span>
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

                    <div class="justify-stretch padding-xs background-secondary" id="span11" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Image</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span8" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span9" style="opacity:0;">
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
            <div class="padding-m gap-s panel border-bottom border-top">
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
        img {
            display: inline; /* Добавляем свойство display: inline для картинок */
        }
    </style>
    <h3>
        <span class="hidden" style="color: #006400">rnbw 🌈 is a modern design and code editor 💻.</span>
        <span class="hidden" style="color: #0000cd">it's simple, flexible, and open.</span>
        <span class="hidden" style="color: #800080">It works with your files.</span>
        <span class="hidden" style="color: #ee82ee">it's powered by the web</span>
        <img class="hidden" src="images/rnbwanimation1.png" style="width: auto; height: 2.19vw;">
        <span class="hidden" style="color: #ee82ee">.</span>
        <span class="hidden" style="color: #ff4500">it's open source.</span>
        <span class="hidden" style="color: #ffa500">it fully embraces open web</span>
        <img class="hidden" src="images/rnbwanimation2.png" style="width: auto; height: 2.19vw;">
        <span class="hidden" style="color: #ffa500">standards.</span>
        <span class="hidden" style="color: #ffd700">and, it is powered by AI 🤖 ...</span>
    </h3>
</div>
    <div class="box-s padding-l border-left background-primary radius-s border opacity-m" style="word-break: break-word;">
        <code>
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
                        if (index === 4) {
                            setTimeout(type, 20);
                            document.getElementById("span4").style.opacity = 1;
                            document.getElementById("span5").style.opacity = 1;
                            document.getElementById("span10").style.opacity = 1;
                        } else if (index === 7) {
                            setTimeout(type, 20);
                            document.getElementById("span7").style.opacity = 1;
                            document.getElementById("span8").style.opacity = 1;
                            document.getElementById("span11").style.opacity = 1;
                        } else {
                            if (index !== 4 && index !== 7) {
                                document.getElementById("span" + (index)).style.opacity = 1;
                            }
                            setTimeout(type, 800);
                        }
                    }
                } else {
                    setTimeout(() => {
                        reset();
                    }, 4000);
                }
                if (index === 4) {
                    setTimeout(() => {
                        const firstImage = h3.querySelector("img:nth-of-type(1)");
                        firstImage.classList.remove("hidden");
                    }, 20);
                }

                if (index === 7) {
                    setTimeout(() => {
                        const secondImage = h3.querySelector("img:nth-of-type(2)");
                        secondImage.classList.remove("hidden");
                    }, 20);
                }

            }

            const textArray = ["<span class=\"hidden\" style=\"color: #006400\">rnbw is a modern design and code editor.</span>",
                "<span class=\"hidden\" style=\"color: #0000cd\">it's simple, flexible, and open.</span>",
                "<span class=\"hidden\" style=\"color: #800080\">It works with your files.</span>",
                "<span class=\"hidden\" style=\"color: #ee82ee\">it's powered by the web</span>",
                "<img class=\"hidden\" src=\"images/rnbwanimation1.png\" style=\"width: auto; height: 2.19vw;\">",
                "<span class=\"hidden\" style=\"color: #ee82ee\">.</span>",
                "<span class=\"hidden\" style=\"color: #ff4500\">it's open source.</span>",
                "<span class=\"hidden\" style=\"color: #ffa500\">it fully embraces open web</span>",
                "<img class=\"hidden\" src=\"images/rnbwanimation2.png\" style=\"width: auto; height: 2.19vw;\">",
                "<span class=\"hidden\" style=\"color: #ffa500\">standards.</span>",
                "<span class=\"hidden\" style=\"color: #ffd700\">and, it is powered by AI 🤖 ...</span>"];

            const code = document.querySelector("code");

            async function typeText(text, delay = 7) {
                return new Promise(resolve => {
                    const span = document.createElement('span');
                    span.style.marginBottom = "0.35vw";
                    span.style.display = 'block';
                    code.appendChild(span);

                    let index = 0;
                    const intervalId = setInterval(() => {
                        span.textContent += text[index];
                        index++;
                        if (index === text.length) {
                            clearInterval(intervalId);
                            resolve();
                        }
                    }, delay);
                });
            }

            async function typeCode() {
                for (let i = 0; i < textArray.length; i++) {
                    if (i === 0) {
                        await new Promise(resolve => setTimeout(resolve, 0));
                    } else if (i === 4 || i === 5 || i === 6 || i === 8 || i === 9 || i === 10) {
                        await new Promise(resolve => setTimeout(resolve, 7));
                    }
                    else if (i === 1 || i === 2) {
                        await new Promise(resolve => setTimeout(resolve, 950));
                    }
                    else {
                        await new Promise(resolve => setTimeout(resolve, 800));
                    }
                    await typeText(textArray[i]);
                }
            }

            typeCode();
            spans.forEach((span) => span.setAttribute("data-text", span.textContent));
            spans.forEach((span) => (span.textContent = ""));
            type();
        }
    }



    function reset() {
        const code = document.querySelector("code");
        while (code.firstChild) {
            code.removeChild(code.firstChild);
        }
        const spans = document.querySelectorAll("h3 span");
        spans.forEach((span, i) => {
            span.classList.add("hidden");
            document.getElementById("span" + (i + 1)).style.opacity = 0
            document.getElementById("span11").style.opacity = 0;
        });

        let heading3DropdownIcon = document.getElementById(
            "heading3-dropdown-icon"
        );
        heading3DropdownIcon.classList.add("hidden");

        const images = document.querySelectorAll("h3 img");
        images.forEach((img) => img.classList.add("hidden"));

        timer = 1500;

        setTimeout(() => {
            observer.observe(rnbwPreviewElement);
        }, 1500);
    }

    observer.observe(rnbwPreviewElement);
});
