// inputField
const inputField = document.querySelector("#input-field");
// outputField
const outputField = document.querySelector("#output-field");
// btn
const buttons = document.querySelectorAll("button");

inputField.addEventListener("keyup", function () {
  outputField.innerHTML = inputField.value;
});

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    switch (true) {
      case button.classList.contains("uppercase"):
        outputField.innerHTML = inputField.value.toUpperCase();
        break;
      case button.classList.contains("lowercase"):
        outputField.innerHTML = inputField.value.toLowerCase();
        break;
      case button.classList.contains("capitalize"):
        outputField.innerHTML =
          inputField.value.charAt(0).toUpperCase() +
          outputField.innerHTML.slice(1).toLowerCase();
        break;
      case button.classList.contains("bold"):
        outputField.style.fontWeight = "bold";
        break;
      case button.classList.contains("italic"):
        outputField.style.fontStyle = "italic";
        break;
      case button.classList.contains("underlined"):
        outputField.style.textDecoration = "underline";
        break;
    }
  });
});
