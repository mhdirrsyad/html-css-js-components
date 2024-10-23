// menu
const menu = document.querySelector(".menu");
// links
const links = document.querySelectorAll("li");
// highlight
const highlight = document.querySelector(".highlight");
// btn
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (this.dataset.open === "close") {
    menu.style.clipPath = "circle(100% at 50% 50%)";
    this.dataset.open = "open";
  } else {
    menu.style.clipPath = "";
    this.dataset.open = "close";
    highlight.style = "";
  }
});

links.forEach((link) => {
  link.addEventListener("pointerover", function () {
    const w = this.offsetWidth;
    const t = this.offsetTop;

    highlight.style.transform = `translateY(calc(${t}px + 28px)`;
    highlight.style.width = `${w}px`;
    highlight.style.height = `4px`;
  });
});
