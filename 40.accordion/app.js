// itemHeaders
const itemHeaders = document.querySelectorAll(".accordion-item-header");

itemHeaders.forEach((itemHeader) => {
  itemHeader.addEventListener("click", function () {
    // activeHeader
    const active = document.querySelector(".active");

    // If no active element is found : null && ... - falsy
    // or if the active element is not the clicked item : active item && active item != clicked item - true
    if (active && active !== itemHeader) {
      active.classList.remove("active");
      active.nextElementSibling.style.maxHeight = 0;
    }

    itemHeader.classList.toggle("active");
    // itemBody
    const itemBody = itemHeader.nextElementSibling;

    if (itemHeader.classList.contains("active")) {
      itemBody.style.maxHeight = itemBody.scrollHeight + "px";
    } else {
      itemBody.style.maxHeight = 0;
    }
  });
});
