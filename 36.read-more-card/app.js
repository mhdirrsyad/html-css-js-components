const contContainerTwo = document.querySelector(".content-container-2");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  contContainerTwo.classList.toggle("active");
});
