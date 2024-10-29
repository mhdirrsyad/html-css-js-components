// input
const input = document.querySelector("#inputBox");
// main form
const form = document.querySelector("form");

input.addEventListener("keydown", function () {
  // regex
  const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

  if (pattern.test(input.value)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else if (!input.value) {
    form.classList.remove("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
  }
});
