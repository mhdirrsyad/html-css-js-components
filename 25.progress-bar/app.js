// progress
const progress = document.querySelector("#progress");
// prevBtn;
const prevBtn = document.querySelector("#prev");
// nextBtn
const nextBtn = document.querySelector("#next");
// circles
const circles = document.querySelectorAll(".circle");

let activeIndex = 0;
updateUI();

nextBtn.addEventListener("click", function () {
  activeIndex++;
  updateUI();
});

prevBtn.addEventListener("click", function () {
  activeIndex--;
  updateUI();
});

function updateUI() {
  circles.forEach((circle, index) => {
    if (index <= activeIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  // actives.length = n+1 - 1
  // circles.length = 4 - 1
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // disabled btn check
  if (activeIndex + 1 === 1) {
    prevBtn.disabled = true;
  } else if (activeIndex + 1 === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
