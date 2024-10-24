// images
const images = document.querySelectorAll(".img-gallery img");
// wrapper
const wrapper = document.querySelector(".imageWrapper");
// imgWrapper
const imgWrapper = document.querySelector("#fullImg");
// close
const closeBtn = document.querySelector(".close");

images.forEach((img) => {
  img.addEventListener("click", function () {
    openModal(img.src);
  });
});

closeBtn.addEventListener("click", function () {
  wrapper.style.display = "none";
});

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}
