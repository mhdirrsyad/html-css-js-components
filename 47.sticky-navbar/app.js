// nav
const nav = document.querySelector(".nav");
// hero
const hero = document.querySelector(".hero");

window.addEventListener("scroll", function () {
  if (this.scrollY > hero.clientHeight - nav.offsetHeight) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
