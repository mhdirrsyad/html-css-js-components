const whiteHeart = document.querySelector(".white-heart");
const redHeart = document.querySelector(".red-heart");
// console.log(whiteHeart, redHeart);

whiteHeart.addEventListener("click", function () {
  redHeart.classList.add("animation");
});

redHeart.addEventListener("click", function () {
  redHeart.classList.remove("animation");
});
