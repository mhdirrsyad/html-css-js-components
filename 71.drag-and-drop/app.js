const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", allowDrop);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

function dragStart(event) {
  setTimeout(() => event.target.classList.add("invisible"), 0);
}

function dragEnd(event) {
  event.target.classList.remove("invisible");
}

function allowDrop(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.target.classList.add("hovered");
}

function dragLeave(event) {
  event.target.classList.remove("hovered");
}

function dragDrop() {
  this.classList.remove("hovered");
  this.appendChild(fill);
}
