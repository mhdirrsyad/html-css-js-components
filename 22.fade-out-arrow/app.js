let arrow = document.querySelector("#arrow");

window.addEventListener("scroll", function () {
  let position = window.scrollY;
  if (position <= 20) {
    arrow.classList.remove("fade-out");
    arrow.classList.add("fade-in");
  } else {
    arrow.classList.add("fade-out");
  }
});
