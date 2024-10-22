// selectField
const selectField = document.querySelector("#selectField");
// list
const list = document.querySelector("#list");
// arrowIcon
const arrowIcon = document.querySelector(".arrow-icon");
// options
const options = document.querySelectorAll(".options");

selectField.addEventListener("click", function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});

for (let i = 0; i < options.length; i++) {
  options[i].onclick = function () {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}
