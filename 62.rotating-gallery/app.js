// imgContainer
const imgContainer = document.querySelector(".image-container");
// prevBtn
const prevBtn = document.querySelector(".btn.prev");
// nextBtn
const nextBtn = document.querySelector(".btn.next");

let x = 0;

prevBtn.addEventListener("click", function () {
  x += 45;
  rotate();
});

nextBtn.addEventListener("click", function () {
  x -= 45;
  rotate();
});

const rotate = () => {
  imgContainer.style.transform = `perspective(800px) rotateY(${x}deg)`;
};
