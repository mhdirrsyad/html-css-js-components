// slides
const slides = document.querySelectorAll(".slide");
// container
const container = document.querySelector(".container");

slides.forEach((slide) => {
  slide.addEventListener("mouseover", function () {
    removeActive();
    slide.classList.add("active");
  });
});

container.addEventListener("pointerout", function () {
  removeActive();
});

function removeActive() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
