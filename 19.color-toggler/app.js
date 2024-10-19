let toggler = document.querySelector("#switch");

toggler.addEventListener("click", function () {
  toggler.checked === true
    ? (document.body.style.backgroundColor = "var(--secondary-color)")
    : (document.body.style.backgroundColor = "var(--primary-color)");
});
