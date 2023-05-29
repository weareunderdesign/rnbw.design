document.addEventListener("DOMContentLoaded", function () {
  //find the current theme
  let theme = document.querySelector("html").dataset.theme;

  let keyboards = document.querySelectorAll(`.${theme}.keyboard`);
  let i = 0;

  function toggleVisibility() {
    for (let j = 0; j < keyboards.length; j++) {
      if (j === i) {
        keyboards[j].classList.remove("hidden");
      } else {
        keyboards[j].classList.add("hidden");
      }
    }
    i = (i + 1) % keyboards.length;
    setTimeout(toggleVisibility, 1000);
  }

  // add a delay before starting the loop
  setTimeout(toggleVisibility, 1000);
});
