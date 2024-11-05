// body
const body = document.body;
// images
const images = document.querySelectorAll(".img");
// arrowBtns
const arrowBtns = document.querySelectorAll(".arrow-btn");

let activeIndex = 0;

const activeImages = () => {
  images.forEach((img) => {
    img.classList.remove("active");
  });

  images[activeIndex].classList.add("active");
};

const setImageAsBg = () => {
  body.style.backgroundImage = images[activeIndex].style.backgroundImage;
};

setImageAsBg();

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList === "right-arrow") {
      activeIndex++;
      if (activeIndex > images.length - 1) {
        activeIndex = 0;
      }
    } else {
      activeIndex--;
      if (activeIndex < 0) {
        activeIndex = images.length - 1;
      }
    }

    setImageAsBg();
    activeImages();
  });
});
