function getTab(element) {
  // active
  const active = document.querySelector(".active");
  // visible
  const visible = document.querySelector(".visible");
  // tabContent
  const tabContent = document.querySelector(`#${element.href.split("#")[1]}`);
  console.log(tabContent);

  active.classList.toggle("active");
  visible.classList.toggle("visible");

  element.classList.add("active");
  tabContent.classList.add("visible");
}

document.addEventListener("click", function (e) {
  if (e.target.matches(".tab-item a")) {
    getTab(e.target);
  }
});
