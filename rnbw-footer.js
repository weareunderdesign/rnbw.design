const footerTemplate = `
<footer class="padding-xl box-l">
    <div class="gap-s row align-start box-l">
        <div class="gap-l column align-start box">
            <a href="https://rnbw.company"><svg-icon src="https://rnbw.company/images/rnbw.svg"></svg-icon></a>
            <div class="text-s">
                © <span id="year"></span> Rainbow Design, Ltd.
            </div>

        </div>
        <div class="column gap-s box">
            <a href="https://rnbw.company/signup" target="_blank">start</a><a href="https://guide.rnbw.dev/">guide</a>
            <a href="https://rnbw.company/about">about</a>
            <a href="https://rnbw.company/changelog">changelog</a>
        </div>
        <div class="column gap-s box">

            <a href="https://discord.gg/HycXz8TJkd" target="_blank">discord ↗</a>
            <a href="https://twitter.com/rnbwdev" target="_blank">twitter ↗</a>
            <a href="https://github.com/rnbwdev" target="_blank">github ↗</a>
            <a href="mailto:hello@rnbw.dev">get in touch</a>
        </div>
        <div class="column gap-s box">
            <a href="https://renecss.org" target="_blank">rene.css ↗</a>
            <a class="opacity-m">svg-icon.js ↗</a>
            <a class="opacity-m">rfrncs.design ↗</a>
        </div>
        <div class="column gap-s box">
            <a href="legal.html"
                target="_blank">legal
            </a>
                <div>
                    <button onclick="toggleTheme()" class="border background-primary radius-s padding-s" style="cursor: pointer; margin-top: 0.25rem;"><span class="opacity-m" id="theme-name"></span></button>
                </div>
        </div>
    </div>
</footer>
`;
function updateThemeElementsVisibility() {
  const theme = document.documentElement.getAttribute("data-theme");
  const lightElements = document.querySelectorAll(".light");
  const darkElements = document.querySelectorAll(".dark");

  lightElements.forEach((element) => {
    element.style.display = theme === "dark" ? "none" : "";
  });

  darkElements.forEach((element) => {
    element.style.display = theme === "dark" ? "" : "none";
  });
}

function handleSystemThemeChange(e) {
  let theme;
  if (e.matches) {
    theme = "dark";
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    theme = "light";
    document.documentElement.setAttribute("data-theme", "light");
  }
  updateThemeElementsVisibility();
  switchFavicon(theme);
}

const setSystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    handleSystemThemeChange({ matches: true });
  } else {
    handleSystemThemeChange({ matches: false });
  }
};

class RnbwFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = footerTemplate;
  }

  connectedCallback() {
    updateThemeElementsVisibility();
    handleSystemThemeChange(
      window.matchMedia("(prefers-color-scheme: dark)")
    );
  }
}

customElements.define("rnbw-footer", RnbwFooter);

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", handleSystemThemeChange);

const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML += currentYear;

var body = document.querySelector("body");
var themeName = document.querySelector("#theme-name");

themeName.textContent = "system";

function toggleTheme() {
  let theme;
  switch (themeName.textContent) {
    case "system":
      theme = "light";
      document.documentElement.setAttribute("data-theme", "light");
      themeName.textContent = "light";
      localStorage.setItem("theme", "light");
      break;
    case "light":
      theme = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
      themeName.textContent = "dark";
      localStorage.setItem("theme", "dark");
      break;
    case "dark":
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
      document.documentElement.removeAttribute("data-theme");
      themeName.textContent = "system";
      localStorage.removeItem("theme");
      setSystemTheme();
      break;
  }

  updateThemeElementsVisibility();
}

var storedTheme = localStorage.getItem("theme");

if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
  themeName.textContent = storedTheme;
  updateThemeElementsVisibility();
} else {
  setSystemTheme();
  updateThemeElementsVisibility();
}

function switchFavicon(theme) {
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/png';
  link.rel = 'shortcut icon';
  link.href = `https://rnbw.company/images/favicon-${theme}.png`;

  document.getElementsByTagName('head')[0].appendChild(link);
}

// document.addEventListener("click", function(event) {
//   if (event.target.tagName === "A" && event.target.href !== "") {
//       var hostname = new URL(event.target.href).hostname;
//       if (hostname === "guide.rnbw.dev") {
//           event.preventDefault();
//           var testImage = new Image();
//           testImage.src = "https://" + hostname + "/favicon.ico";
//           testImage.onerror = function() {
//               window.location.href = "404.html";
//           };
//       }
//   }
// });


