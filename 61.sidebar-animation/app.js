// menuBtn
const menuBtn = document.querySelector(".menu");
// sidebar
const sidebar = document.querySelector(".sidebar");
// content
const content = document.querySelector(".content");

menuBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  content.classList.toggle("active");
});
