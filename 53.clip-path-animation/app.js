// position
let pos = document.documentElement;

pos.addEventListener("mousemove", function (e) {
  // add custom property
  pos.style.setProperty("--1", e.clientX + "px");
  pos.style.setProperty("--2", e.clientY + "px");
});
