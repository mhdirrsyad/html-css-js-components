const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    this.name === "base" ? (unit = "") : (unit = "px");
    document
      .querySelector(":root")
      .style.setProperty(`--${this.name}`, `${this.value}${unit}`);
  });
});
