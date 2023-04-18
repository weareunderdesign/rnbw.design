const rnbwPreviewTemplate = `
                <div
                    class="hidden-on-mobile direction-column radius-s background-primary border padding-m gap-m">
                    <div
                        class="panel justify-stretch radius-s border background-primary">
                        <div class="panel">
                            <div
                                class="justify-stretch padding-s border-bottom">
                                <div class="gap-s align-center">
                                    <div
                                        class="radius-m icon-s align-center background-secondary"></div>
                                    <span class="text-s opacity-m">/</span>
                                    <div class="gap-s align-center radius-s">
                                        <div
                                            class="radius-m icon-s align-center background-secondary"></div>
                                        <span class="text-s">Project</span>
                                    </div>
                                </div>
                            </div>
                            <div class="border-bottom">
                                <div
                                    class="justify-stretch padding-xs background-secondary">
                                    <div class="gap-s padding-xs">
                                        <div class="icon-xs"></div>
                                        <svg-icon
                                            src="https://raincons.rnbw.dev/icons/page.svg"></svg-icon>
                                        <span class="text-s">Page</span>
                                    </div>
                                    <div class="direction-column"></div>
                                </div>
                                <div class="justify-stretch padding-xs">
                                    <div class="justify-start gap-s padding-xs">
                                        <div class="icon-xs"></div>
                                        <svg-icon
                                            src="https://raincons.rnbw.dev/icons/brush.svg"></svg-icon>
                                        <span class="text-s">Stylesheet</span>
                                        <div
                                            class="radius-s foreground-primary"
                                            style="
                                                width: 6px;
                                                height: 6px;
                                            "></div>
                                    </div>
                                </div>
                                <div class="justify-stretch padding-xs">
                                    <div class="gap-s padding-xs">
                                        <div class="icon-xs"></div>
                                        <svg-icon
                                            src="https://raincons.rnbw.dev/icons/code-js.svg"></svg-icon>
                                        <span class="text-s">Script</span>
                                    </div>
                                    <div class="direction-column"></div>
                                </div>
                                <div class="gap-s justify-start padding-s">
                                    <div class="icon-xs"></div>
                                    <svg-icon
                                        src="https://raincons.rnbw.dev/icons/component.svg"></svg-icon>
                                    <span class="text-s">Component</span>
                                </div>
                                <div>
                                    <div>
                                        <div
                                            class="gap-s justify-start padding-s">
                                            <svg-icon
                                                src="https://raincons.rnbw.dev/icons/down.svg"></svg-icon>
                                            <svg-icon
                                                src="https://raincons.rnbw.dev/icons/folder.svg"></svg-icon>
                                            <span class="text-s">Folder</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="gap-s justify-start padding-s">
                                            <div class="icon-xs"></div>
                                            <div class="icon-xs"></div>
                                            <svg-icon
                                                src="https://raincons.rnbw.dev/icons/brush.svg"></svg-icon>
                                            <span class="text-s"
                                                >Stylesheet</span
                                            >
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="gap-s justify-start padding-s">
                                            <div class="icon-xs"></div>
                                            <div class="icon-xs"></div>
                                            <svg-icon
                                                src="https://raincons.rnbw.dev/icons/code-js.svg"></svg-icon>
                                            <span class="text-s">Script</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="border-bottom">
                                <div class="justify-stretch padding-xs">
                                    <div class="gap-s padding-xs">
                                        <div class="icon-xs"></div>
                                        <svg-icon
                                            src="https://raincons.rnbw.dev/icons/image.svg"></svg-icon>
                                        <span class="text-s">Image</span>
                                    </div>
                                </div>
                                <div class="justify-stretch padding-xs">
                                    <div class="gap-s padding-xs">
                                        <svg-icon
                                            src="https://raincons.rnbw.dev/icons/down.svg"></svg-icon>
                                        <svg-icon
                                            src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                                        <span class="text-s">Div</span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="justify-stretch padding-xs background-tertiary">
                                        <div class="gap-s padding-xs">
                                            <div class="icon-xs"></div>
                                            <svg-icon
                                                src="https://raincons.rnbw.dev/icons/down.svg"></svg-icon>
                                            <svg-icon
                                                src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                                            <span class="text-s">Element</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="justify-stretch padding-xs background-secondary">
                                            <div class="gap-s padding-xs">
                                                <div class="icon-xs"></div>
                                                <div class="icon-xs"></div>
                                                <div class="icon-xs"></div>
                                                <svg-icon
                                                    src="https://raincons.rnbw.dev/icons/image.svg"></svg-icon>
                                                <span class="text-s">Logo</span>
                                            </div>
                                        </div>
                                        <div
                                            class="justify-stretch padding-xs background-secondary">
                                            <div class="gap-s padding-xs">
                                                <div class="icon-xs"></div>
                                                <div class="icon-xs"></div>
                                                <svg-icon
                                                    src="https://raincons.rnbw.dev/icons/right.svg"></svg-icon>
                                                <svg-icon
                                                    src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                                                <span class="text-s"
                                                    >Element</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="justify-stretch padding-xs background-secondary">
                                            <div class="gap-s padding-xs">
                                                <div class="icon-xs"></div>
                                                <div class="icon-xs"></div>
                                                <div class="icon-xs"></div>
                                                <svg-icon
                                                    src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                                                <span class="text-s"
                                                    >Element</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="justify-stretch padding-xs">
                                    <div class="gap-s padding-xs">
                                        <div class="icon-xs"></div>
                                        <svg-icon
                                            src="https://raincons.rnbw.dev/icons/right.svg"></svg-icon>
                                        <svg-icon
                                            src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                                        <span class="text-s">Element</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="padding-m gap-s panel border-bottom">
                                <div class="justify-stretch">
                                    <span class="text-s">Settings</span>
                                    <div
                                        class="direction-column gap-s justify-end">
                                        <div class="padding-xs radius-xs">
                                            <svg-icon
                                                src="https://raincons.rnbw.dev/icons/plus.svg"></svg-icon>
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
                                            <svg-icon
                                                src="https://raincons.rnbw.dev/icons/plus.svg"></svg-icon>
                                        </div>
                                    </div>
                                </div>
                                <div class="gap-s">
                                    <div
                                        class="gap-xs border radius-xs padding-xs">
                                        <span class="text-s">Style1</span>
                                    </div>
                                    <div
                                        class="gap-xs border radius-xs padding-xs foreground-secondary">
                                        <svg-icon
                                            src="https://raincons.rnbw.dev/icons/cross.svg"></svg-icon>
                                        <span class="text-s">Style2</span>
                                    </div>
                                    <div class="padding-xs radius-xs">
                                        <svg-icon
                                            src="https://raincons.rnbw.dev/icons/states.svg"></svg-icon>
                                    </div>
                                    <div
                                        class="background-secondary-onhover padding-xs radius-xs">
                                        <svg-icon
                                            src="https://raincons.rnbw.dev/icons/media.svg"></svg-icon>
                                    </div>
                                </div>
                                <div class="justify-stretch">
                                    <div class="gap-s box justify-start">
                                        <div
                                            class="padding-xs radius-xs background-secondary">
                                            <svg-icon
                                                src="https://raincons.rnbw.dev/icons/width.svg"></svg-icon>
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
                                            <svg-icon
                                                src="https://raincons.rnbw.dev/icons/flex.svg"></svg-icon>
                                        </div>
                                        <span class="text-s">Display</span>
                                    </div>
                                    <div class="direction-column gap-s">
                                        <span class="text-s">Flex</span>
                                    </div>
                                </div>
                                <div class="justify-stretch">
                                    <div class="gap-s box justify-start">
                                        <div
                                            class="padding-xs radius-xs background-secondary">
                                            <svg-icon
                                                src="https://raincons.rnbw.dev/icons/relative.svg"></svg-icon>
                                        </div>
                                        <span class="text-s">Position</span>
                                    </div>
                                    <div class="direction-column gap-s">
                                        <span class="text-s">Relative</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box gap-l direction-row">
                        <h4>
                            <span style="color: #006400"
                                >rnbw is a modern design and code editor.</span
                            >
                            <span style="color: #0000cd"
                                >it is 100% powered by the web.</span
                            >
                            <span style="color: #800080">It is simple.</span>
                            <span style="color: #ee82ee"
                                >it is made “for the people”.</span
                            >
                            <span style="color: #ff4500"
                                >it is optimized for simplicity,
                                flexibility and openness.</span
                            >
                            <span style="color: #ffa500"
                                >and it fully embraces open web standards.</span
                            >
                            <span style="color: #ffd700"
                                >and, it is powered by AI...</span
                            >
                        </h4>
                        <div
                            class="padding-l border-left background-primary radius-s border opacity-m">

                                <code style="white-space: pre-wrap;">&lt;span style="color:#006400"&gt;
    rnbw is a modern design and code editor.&lt;/span&gt;
&lt;span style="color:#0000CD"&gt;
    is it 100% powered by the web.&lt;/span&gt;
&lt;span style="color:#800080"&gt;
    It is simple.&lt;/span&gt;
&lt;span style="color:#EE82EE"&gt;
    It is made &ldquo;for the people&rdquo;.&lt;/span&gt;
&lt;span style="color:#FF4500"&gt;
    It is 100% optimized for simplicity, flexibility and openness.&lt;/span&gt;
&lt;span style="color:#FFA500"&gt;
    And it fully embraces open web standards.&lt;/span&gt;
&lt;span style="color:#FFD700"&gt;
    And, it is powered by AI...&lt;/span&gt;</code>

                        </div>
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
