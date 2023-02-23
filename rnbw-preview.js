const rnbwPreviewTemplate = `
<div class="hidden-on-mobile direction-column radius-s background-primary border">
<div class="panel justify-stretch">
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
      <div class="justify-stretch padding-xs background-secondary">
        <div class="gap-s padding-xs">
          <div class="icon-xs"></div>
          <svg-icon src="https://raincons.rnbw.dev/icons/page.svg"></svg-icon>
          <span class="text-s">Page</span>
        </div>
        <div class="direction-column"></div>
      </div>
      <div class="justify-stretch padding-xs">
        <div class="gap-s padding-xs">
          <div class="icon-xs"></div>
          <svg-icon src="https://raincons.rnbw.dev/icons/brush.svg"></svg-icon>
          <span class="text-s">Stylesheet</span>
        </div>
      </div>
      <div class="justify-stretch padding-xs">
        <div class="gap-s padding-xs">
          <div class="icon-xs"></div>
          <svg-icon src="https://raincons.rnbw.dev/icons/code-js.svg"></svg-icon>
          <span class="text-s">Script</span>
        </div>
        <div class="direction-column"></div>
      </div>
      <div class="gap-s justify-start padding-s">
        <div class="icon-xs"></div>
        <svg-icon src="https://raincons.rnbw.dev/icons/component.svg"></svg-icon>
        <span class="text-s">Component</span>
      </div>
      <div>
        <div>
          <div class="gap-s justify-start padding-s">
            <div class="icon-xs icon-down"></div>
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
          <div class="justify-stretch padding-xs background-secondary">
            <div class="gap-s padding-xs">
              <div class="icon-xs"></div>
              <div class="icon-xs"></div>
              <div class="icon-xs"></div>
              <svg-icon src="https://raincons.rnbw.dev/icons/image.svg"></svg-icon>
              <span class="text-s">Logo</span>
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
        <div class="direction-column gap-s justify-end">
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
        <div class="direction-column gap-s">
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
        <div class="direction-column gap-s">
          <span class="text-s">Relative</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="box align-stretch">
  <div class="box padding-xl border-left">
    <h5 class="border">
    <span style="color:#006400">rnbw is a modern design and code editor.</span>
    <span style="color:#0000CD">is it 100% powered by the web.</span>
    <span style="color:#800080">It is simple.</span>
    <span style="color:#EE82EE">It is made “for the people”.</span>
    <span style="color:#FF4500">It is 100% optimized for simplicity, flexibility and openness.</span>
    <span style="color:#FFA500">And it fully embraces open web standards.</span>
    <span style="color:#FFD700">And, it is powered by AI...</span>
    </h5>
  </div>
  <div class="box padding-xl border-left">
    <code>
    &#x003C;span style=&#x0022;color:#006400&#x0022;&#x003E;rnbw is a design tool.&#x003C;/span&#x003E;
    &#x003C;span style=&#x0022;color:#0000CD&#x0022;&#x003E;is it 100% powered by the web.&#x003C;/span&#x003E;
    &#x003C;span style=&#x0022;color:#800080&#x0022;&#x003E;It is simple.&#x003C;/span&#x003E;
    &#x003C;span style=&#x0022;color:#EE82EE&#x0022;&#x003E;It is made &#x201C;for the people&#x201D;.&#x003C;/span&#x003E;
    &#x003C;span style=&#x0022;color:#FF4500&#x0022;&#x003E;It is 100% optimized for simplicity, flexibility and openness.&#x003C;/span&#x003E;
    &#x003C;span style=&#x0022;color:#FFA500&#x0022;&#x003E;And it fully embraces open web standards.&#x003C;/span&#x003E;
    &#x003C;span style=&#x0022;color:#FFD700&#x0022;&#x003E;And, it is powered by AI...&#x003C;/span&#x003E;
    </code>
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