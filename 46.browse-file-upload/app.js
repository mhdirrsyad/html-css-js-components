// upload
const upload = document.querySelector("input");
// image
const image = document.querySelector(".img img");
// close
const close = document.querySelector(".icon .close");

upload.addEventListener("change", function () {
  const file = this.files[0];

  if (!file.type.startsWith("image/")) {
    alert("Only image files are allowed!");
    file.value = "";
  } else {
    image.classList.add("active");
    close.classList.add("exit");
    image.src = URL.createObjectURL(file);

    close.addEventListener("click", function () {
      image.classList.remove("active");
      close.classList.remove("exit");
    });
  }
});
