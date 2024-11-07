// loginForm
const loginForm = document.querySelector(".login-form");
// signupForm
const signupForm = document.querySelector(".signup-form");
// loginBtn
const loginBtn = document.querySelector(".login-btn");
// signUpBtn
const signUpBtn = document.querySelector(".signup-btn");
// backLayer
const backLayer = document.querySelector(".back-layer");

signUpBtn.addEventListener("click", function () {
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
  backLayer.style.clipPath = "inset(0 0 0 50%)";
});

loginBtn.addEventListener("click", function () {
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
  backLayer.style.clipPath = "inset(0 50% 0 0)";
});
