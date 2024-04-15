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

    <div class="rnbw-animation-container padding-m" id="container">
        <style>
        
            .rnbw-animation-container {
                width: 30vw;
                height: 42.2vw;
                overflow: auto;
            }

            .animated-element {
                margin-right: 0.56vw;
            }
              
            .hidden {
                display: none;
            }
              
            .custom-text {
                font-size: 2.45vw;
                line-height: 1.12;
            }

            .custom-image {
                display: inline-block;
                width: auto;
                height: 2.19vw;
                margin-bottom: -0.28vw;
            } 

        </style>
    </div>

    <div class="box-s padding-l border-left background-primary radius-s border opacity-m" style="word-break: break-word;">
        <style>
        .text-animation div {
            display: inline-block;
            margin-bottom: 0.57vw;
        }
        </style>
        <code class="text-animation">
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

    var animation1Finished = false;
    var animation2Finished = false;

    // Animation 1
    var texts1 = ["rnbw 🌈 is a modern design and code editor 💻 .", "it's simple, flexible, and open.", "it works with your files.", "it's powered by the web", ".", "it's open source.", "it fully embraces open web", "standards.", "and, it is powered by AI 🤖 ..."];
    var colors1 = ["#006400", "#0000cd", "#800080", "#ee82ee", "#ee82ee", "#ff4500", "#ffa500", "#ffa500", "#ffd700"];
    var images1 = ["images/rnbwanimation1.png", "images/rnbwanimation2.png"];
    var container1 = document.getElementById("container");

    function typeEffect(text, color) {
        return new Promise((resolve, reject) => {
            var charIndex = 0;
            var textElement = document.createElement('span');
            textElement.className = "custom-text";
            textElement.style.color = color;
            container1.appendChild(textElement);

            function type() {
                if (charIndex < text.length) {
                    var char = text.charAt(charIndex);
                    textElement.textContent += char;
                    charIndex++;
                    setTimeout(type, 20);
                } else {
                    resolve();
                }
            }

            type();
        });
    }

    async function animateTexts() {
        var delay = 0;
        for (let i = 0; i < texts1.length; i++) {
            await typeEffect(texts1[i], colors1[i]);
            container1.lastChild.style.marginRight = "0.56vw";

            if (i === 3) {
                await new Promise(resolve => setTimeout(resolve, 20));
                var img = document.createElement('img');
                img.classList.add('animated-element');
                img.classList.add('custom-image');
                img.src = images1[0];
                container1.appendChild(img);
            } else if (i === 6) {
                await new Promise(resolve => setTimeout(resolve, 20));
                var img = document.createElement('img');
                img.classList.add('animated-element');
                img.classList.add('custom-image');
                img.src = images1[1];
                container1.appendChild(img);
            }
            delay = 70;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        animation1Finished = true;
        if (animation2Finished) {
            restartAnimations();
        }
    }
    animateTexts();

    // Animation 2
    const textContainer = document.querySelector('.text-animation');
    const texts2 = [
        'function typeEffect(text, color) {',
        'return new Promise((resolve, reject) => {',
        'var charIndex = 0;',
        'var textElement = document.createElement("span");',
        'textElement.className = "custom-text";',
        'textElement.style.color = color;',
        'container.appendChild(textElement);',
        'function type() {',
        'if (charIndex < text.length) {',
        'var char = text.charAt(charIndex);',
        'textElement.textContent += char;',
        'charIndex++;',
        'setTimeout(type, 100);',
        '} else {',
        'resolve();',
        '}',
        '}',
        'type();',
        '});',
        '}',
    ];
    const margins = ['0vw', '0.57vw', '1.16vw', '1.16vw', '1.16vw', '1.16vw', '1.16vw', '1.16vw', '1.73vw', '2.31vw', '2.31vw', '2.31vw', '2.31vw', '1.73vw', '2.31vw', '1.73vw', '1.16vw', '1.16vw', '0.57vw', '0vw'];
    let currentIndex2 = 0;
    let charIndex2 = 0;

    async function typeText2() {
        if (currentIndex2 < texts2.length) {
            const currentText = texts2[currentIndex2].trim();
            const marginLeft = margins[currentIndex2];
            const textDiv = document.createElement('div');
            textDiv.style.marginLeft = marginLeft;
            textContainer.appendChild(textDiv);

            function typeChar2() {
                if (charIndex2 < currentText.length) {
                    const charSpan = document.createElement('span');
                    charSpan.textContent = currentText[charIndex2];
                    textDiv.appendChild(charSpan);
                    charIndex2++;
                    setTimeout(typeChar2, 10);
                } else {
                    currentIndex2++;
                    charIndex2 = 0;
                    textContainer.innerHTML += "<br>";
                    setTimeout(typeText2, 20);
                }
            }
            typeChar2();
        } else {
            animation2Finished = true; 
            if (animation1Finished) { 
                restartAnimations(); 
            }
        }
    }
    typeText2();

    // Animation 2(2)

    // const textContainer = document.querySelector('.text-animation');
    // const combinedText = 
    // `function typeEffect(text, color) {
    //     return new Promise((resolve, reject) => {
    //         var charIndex = 0;
    //         var textElement = document.createElement("span");
    //         textElement.className = "custom-text";
    //         textElement.style.color = color;
    //         container.appendChild(textElement);
    //         function type() {
    //             if (charIndex < text.length) {
    //                 var char = text.charAt(charIndex);
    //                 textElement.textContent += char;
    //                 charIndex++;
    //                 setTimeout(type, 100);
    //             } else {
    //                 resolve();
    //             }
    //         }
    //         type();
    //     });
    // }`;

    // let charIndex = 0;

    // async function typeText2() {
    //     const currentText = combinedText.trim();
    //     const textDiv = document.createElement('div');
    //     textContainer.appendChild(textDiv);
    
    //     function typeChar() {
    //         if (charIndex < currentText.length) {
    //             const charSpan = document.createElement('span');
    //             charSpan.textContent = currentText[charIndex];
    //             textDiv.appendChild(charSpan);
    //             charIndex++;
    //             setTimeout(typeChar, 7.5);
    //         } else {
    //             animation2Finished = true;
    //             if (animation1Finished) {
    //                 restartAnimations();
    //             }
    //         }
    //     }
    //     typeChar();
    // }
    
    // typeText2();

    // Restart
    function restartAnimations() {
        setTimeout(function () {
            var children = Array.from(container1.childNodes);
            children.forEach(child => {
                if (child.tagName === "SPAN" || child.tagName === "IMG") {
                    container1.removeChild(child);
                }
            });
        }, 4000);

        setTimeout(function () {
            textContainer.innerHTML = '';
        }, 4000);

        setTimeout(function () {
            animation1Finished = false;
            animation2Finished = false;
            currentIndex2 = 0;
            animateTexts();
            // charIndex = 0;
            typeText2();
        }, 5500);
    }

});
