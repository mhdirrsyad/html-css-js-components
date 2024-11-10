// captcha
const captcha = document.querySelector(".captcha");
// reloadBtn
const reloadBtn = document.querySelector(".reload-btn");
// inputField
const inputField = document.querySelector("input");
// checkBtn
const checkBtn = document.querySelector(".check-btn");
// statusText
const statusText = document.querySelector(".status-text");

checkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  statusText.style.display = "block";
  let inputVal = inputField.value.split("").join("");

  if (inputVal == captcha.innerText) {
    statusText.style.color = "#229799";
    statusText.innerText = "Nice, captcha matched!";
    setTimeout(() => {
      statusText.style.display = "none";
      inputField.value = "";
      captcha.innerText = "";
      reloadBtn.firstElementChild.style.transform = "rotate(360deg)";
      // new captcha
      getCaptcha();
    }, 1000);
    setTimeout(() => {
      reloadBtn.firstElementChild.style.transform = "rotate(0deg)";
    }, 1300);
  } else {
    statusText.style.color = "crimson";
    statusText.innerText = "Captcha not matched, try again!";
  }
});

reloadBtn.addEventListener("click", function () {
  captcha.innerHTML = "";
  getCaptcha();
});

const allCharacters = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  const letters = caps.concat(caps.map((letter) => letter.toLowerCase()));
  const numbers = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
  return letters.concat(numbers.map((number) => +number));
})();

function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    let randomChars =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += randomChars;
  }
}
