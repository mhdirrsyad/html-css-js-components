// closeBtn
const closeBtn = document.querySelector("#close");
// ctaBtn
const ctaBtn = document.querySelector("#cta");
// modal
const modal = document.querySelector("#modal");

ctaBtn.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

window.addEventListener("click", function (e) {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});
