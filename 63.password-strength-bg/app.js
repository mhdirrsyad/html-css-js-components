// password
const password = document.querySelector("#password");
// bgImg
const bgImg = document.querySelector(".background-image");

password.addEventListener("input", function (e) {
  const input = e.target.value;
  const length = input.length;
  const blurness = 20 - length * 2;
  bgImg.style.filter = `blur(${blurness}px)`;
});
