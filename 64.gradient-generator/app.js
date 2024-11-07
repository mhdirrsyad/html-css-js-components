// color
const color1 = document.querySelector(".c1");
const color2 = document.querySelector(".c2");
// gradientCont
const gradientCont = document.querySelector("#gradient-container");
// randomBtn
const randomBtn = document.querySelector(".random-color-btn");

const makeColor = () => {
  // toString basis 16 0-9 & A-F
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const generateGradient = () => {
  color1.value = `#${makeColor()}`;
  color2.value = `#${makeColor()}`;
  gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
};

const setGradient = () => {
  gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", generateGradient);
