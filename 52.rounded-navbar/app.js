// navbarBtn
const navbarBtn = document.querySelector(".navbar-btn");
// navbarWrap
const navbarWrap = document.querySelector(".navbar-wrapper");

navbarBtn.addEventListener("click", function () {
  navbarWrap.classList.toggle("change");
});
