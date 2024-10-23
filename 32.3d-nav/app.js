// container
const container = document.querySelector(".page-container");
// pages
const pages = document.querySelectorAll(".page");
// toggleBtn
const toggleBtn = document.querySelector(".toggle-btn");
// navList
const navList = document.querySelector(".nav-list");
// overlay
const overlay = document.querySelector(".overlay");
// links
const links = document.querySelectorAll(".link");

let pageIndex = 0;
toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("active");
  container.classList.toggle("active");
  navList.classList.toggle("show");

  // border page container
  if (container.classList.contains("active")) {
    pages.forEach((page) => {
      page.style.borderRadius = "24px";
    });
  } else {
    pages.forEach((page) => {
      page.style.borderRadius = "";
    });
  }
});

links.forEach((link, i) => {
  link.addEventListener("click", function () {
    nextPage(i);
  });
});

function nextPage(index) {
  overlay.style.animation = "slide 1s linear 1";
  setTimeout(() => {
    pages[pageIndex].classList.remove("active");
    pages[index].classList.add("active");
    pageIndex = index;
  }, 500);

  setTimeout(() => {
    overlay.style.animation = "";
  }, 1100);
}
