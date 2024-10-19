const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (event) {
  cursor.style.display = "block";
  // event.pageX == across
  // event.pageY == up and down
  moveCursor(event.pageX, event.pageY);
});

const moveCursor = (pageX, pageY) => {
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
};
