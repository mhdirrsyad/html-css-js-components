// input
const input = document.querySelector("input");
// eye
const eyeIcon = document.querySelector(".eye-icon");
// eye-container
const eyeContainer = document.querySelector(".eye-container");

window.addEventListener("click", function (e) {
  if (e.target === eyeIcon) {
    if (input.type === "password") {
      input.setAttribute("type", "text");
      eyeIcon.setAttribute("class", "fa-solid fa-eye eye-icon");
    } else {
      input.setAttribute("type", "password");
      eyeIcon.setAttribute("class", "fa-solid fa-eye-slash eye-icon");
    }
  }
});
