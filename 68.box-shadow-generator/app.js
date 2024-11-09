// sliders
const sliders = document.querySelectorAll('input[type="range"]');
// color
const color = document.querySelector('input[type="color"]');
// output
const output = document.querySelector("#css-code");
// btnCopy
const btnCopy = document.querySelector("#copy");
// box
const box = document.querySelector("#box");
// alert
const alert = document.querySelector(".alert");

sliders.forEach((slider) => {
  slider.addEventListener("input", () => createBox());
});

color.addEventListener("input", () => createBox());

btnCopy.addEventListener("click", async function () {
  output.select();
  // clipboard API
  await navigator.clipboard.writeText(output.value);

  alert.classList.add("active");
  setTimeout(() => {
    alert.classList.remove("active");
  }, 1000);
});

function createBox() {
  let x = sliders[0].value;
  let y = sliders[1].value;
  let blurRadius = sliders[2].value;
  let spreadRadius = sliders[3].value;
  let shadowColor = color.value;
  let boxShadow = `${x}px ${y}px ${blurRadius}px ${spreadRadius}px`;
  box.style.cssText = `box-shadow: ${boxShadow} ${shadowColor}`;
  output.value = `box-shadow: ${boxShadow}`;
}
