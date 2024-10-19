// btn
const btnPlay = document.querySelector(".btn-play");
// close-icon
const btnClose = document.querySelector(".btn-close");
// trailer-container
const trailerContainer = document.querySelector(".trailer-container");
// video
const iframe = document.querySelector("iframe");

btnPlay.addEventListener("click", function () {
  trailerContainer.classList.remove("active");
});

btnClose.addEventListener("click", function () {
  trailerContainer.classList.add("active");
  // stop the videos with iframe
  let iframeSrc = iframe.src;
  iframe.src = iframeSrc;
});
