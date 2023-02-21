const footerTemplate = `
<footer class="padding-xl box-l">
    <div class="gap-s direction-column align-start box-l">
        <div class="gap-l direction-row align-start box">
            <svg-icon src="https://rnbw.company/images/rnbw.svg"></svg-icon>
            <div class="text-s">
                © <span id="year"></span> Rainbow Design, Ltd.
            </div>

        </div>
        <div class="direction-row gap-s box">
            <a href="https://rnbw.dev/" target="_blank">rnbw 0.1</a><a href="https://guide.rnbw.dev/">guide</a>
            <a href="https://rnbw.company/about">about</a>
            <a href="https://rnbw.company/pricing">pricing</a>
        </div>
        <div class="direction-row gap-s box">

            <a href="https://discord.gg/cKHxeyR2" target="_blank">community ↗</a>
            <a href="https://twitter.com/rnbwdev" target="_blank">twitter ↗</a><a href="mailto:hello@rnbw.dev">get in
                touch</a>
        </div>
        <div class="direction-row gap-s box">
            <a href="https://renecss.org/">rene.css ↗</a><a href="http://svg-icon.xyz/">svg-icon.js ↗</a><a
                class="opacity-m">rfrncs.design ↗</a>
        </div>
        <div class="direction-row gap-s box">
            <a href="https://www.notion.so/rnbw/Terms-Conditions-0f1a79a92cd84cbdb84c99ed48445db2"
                target="_blank">terms</a><a
                href="https://www.notion.so/rnbw/Privacy-Policy-d490b0e9792e460289985feddf601097"
                target="_blank">privacy</a><a href="https://www.notion.so/rnbw/GDPR-e0ff3e4d10f649ffbf0c81b99629ec84"
                target="_blank">gdpr</a>
                <div>
                    <button onclick="toggleTheme()" class="border background-primary radius-s" style="cursor: pointer;"><span class="opacity-m" id="theme-name"></span></button>
                </div>
        </div>
    </div>
</footer>
`;

class RnbwFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = footerTemplate;
  }
}

customElements.define("rnbw-footer", RnbwFooter);

const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML += currentYear;

// Select body and theme name elements from the DOM
var body = document.querySelector("body");
var themeName = document.querySelector("#theme-name");

// Set the initial value of themeName to "system"
themeName.textContent = "system";

// Function to toggle between themes (light, dark, and system)
function toggleTheme() {
  switch (themeName.textContent) {
    // If the current theme is set to "system", change it to "light"
    case "system":
      body.setAttribute("data-theme", "light");
      themeName.textContent = "light";
      // Save the new theme in local storage
      localStorage.setItem("theme", "light");
      break;
    // If the current theme is set to "light", change it to "dark"
    case "light":
      body.setAttribute("data-theme", "dark");
      themeName.textContent = "dark";
      // Save the new theme in local storage
      localStorage.setItem("theme", "dark");
      break;
    // If the current theme is set to "dark", change it to "system"
    case "dark":
      body.removeAttribute("data-theme");
      themeName.textContent = "system";
      // Remove the theme from local storage
      localStorage.removeItem("theme");
      break;
  }
}

// Check if there is a saved theme in local storage
var storedTheme = localStorage.getItem("theme");

// If there is a saved theme, use it
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
  themeName.textContent = storedTheme;
} else {
  // If there is no saved theme, check the system preference
  const siteWrapper = document.getElementsByTagName("html")[0];

  const setSystemTheme = () => {
    // Check if the system prefers a dark theme
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      siteWrapper.setAttribute("data-theme", "dark");
      themeName.textContent = "dark";
      // Save the theme in local storage
      localStorage.setItem("theme", "dark");
    } else {
      siteWrapper.setAttribute("data-theme", "light");
      themeName.textContent = "light";
      // Save the theme in local storage
      localStorage.setItem("theme", "light");
    }
  };

  // Set the initial theme based on the system preference
  setSystemTheme();

  // Listen for changes in the system preference
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      // Update the theme if the system preference changes
      setSystemTheme();
    });
}