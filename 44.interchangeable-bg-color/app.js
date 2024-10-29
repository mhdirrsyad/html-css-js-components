// btn
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    value = btn.textContent.toLowerCase();

    // change background
    document.body.classList = "";
    switch (value) {
      case "red":
        document.body.classList.add("red");
        break;
      case "yellow":
        document.body.classList.add("yellow");
        break;
      case "green":
        document.body.classList.add("green");
        break;
      case "blue":
        document.body.classList.add("blue");
        break;
      case "purple":
        document.body.classList.add("purple");
        break;
      case "pink":
        document.body.classList.add("pink");
        break;
      default:
        break;
    }
  });
});
