// searchContainer
const searchContainer = document.querySelector(".container");
// micIcon
const micIcon = document.querySelector(".fa-microphone");
// magnifying
const magnifyingIcon = document.querySelector(".fa-magnifying-glass");

magnifyingIcon.addEventListener("click", function () {
  searchContainer.classList.toggle("active");
  micIcon.classList.toggle("hidden");
});
