// innerCursor
const innerCursor = document.querySelector(".inner-cursor");
// outerCursor
const outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", function (e) {
  // get koordinat
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
});
