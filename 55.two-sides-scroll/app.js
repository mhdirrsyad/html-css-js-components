// sliderContainer
const sliderContainer = document.querySelector(".slider-container");
// leftSide
const leftSide = document.querySelector(".left-side");
// rightSide
const rightSide = document.querySelector(".right-side");
// downBtn
const downBtn = document.querySelector("#down-btn");
// upBtn
const upBtn = document.querySelector("#up-btn");
// sliderLength
const sliderLength = rightSide.querySelectorAll("div").length;

let activeSlideIndex = 0;

// leftSide top will be -300vh
leftSide.style.top = `-${(sliderLength - 1) * 100}vh`;

upBtn.addEventListener("click", function () {
  nextSlide("up");
});
downBtn.addEventListener("click", function () {
  nextSlide("down");
});

const nextSlide = (params) => {
  // sliderHeight - get clientHeight
  const sliderHeight = sliderContainer.clientHeight;

  if (params === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > sliderLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (params === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1;
    }
  }

  rightSide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  leftSide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
