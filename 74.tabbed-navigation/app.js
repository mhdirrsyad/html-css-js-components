const menuList = document.querySelectorAll(".menu-links ul li");
const sections = document.querySelectorAll(".sections > section");
const menuLink = document.querySelector(".menu-links");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuLink.classList.toggle("active");
});

menuList.forEach((li) => {
  li.addEventListener("click", (e) => {
    const actives = document.querySelectorAll(".menu-links ul li.active");
    actives.forEach((activeElement) => {
      activeElement.classList.remove("active");
    });
    e.target.classList.add("active");

    sections.forEach((section) => {
      if (e.target.textContent === section.dataset.section) {
        const visibles = document.querySelectorAll(".sections .visible");
        visibles.forEach((element) => {
          element.classList.remove("visible");
        });
        section.classList.add("visible");
      }
    });

    menuLink.classList.remove("active");
  });
});
