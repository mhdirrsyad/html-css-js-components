const btn = document.querySelector("#btn");
let hex = document.querySelector("#hexCode");

// function generate random color
function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 16);
    color += letters[random];
  }

  return color;
}

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = randomColor();
  hex.innerHTML = randomColor();
});
