let form = document.querySelector("form");
let input = document.querySelector("input");
let output = document.querySelector(".output");
let message = document.querySelector(".message");

form.addEventListener("submit", (e) => {
  // prevent browser reloaded
  e.preventDefault();

  let value = input.value;
  output.appendChild(addTodoList(value));
  // clear input
  input.value = "";
});

function addTodoList(value) {
  let todo = document.createElement("div");
  let textEl = document.createElement("span");

  textEl.innerHTML = value;
  todo.appendChild(textEl);

  message.textContent = "Item Added";
  message.classList.add("success");

  setTimeout(() => {
    message.classList.remove("success");
  }, 1000);

  let closeEl = document.createElement("i");
  closeEl.setAttribute("class", "fa-solid fa-xmark delete");

  // close btn event
  closeEl.addEventListener("click", () => {
    output.removeChild(todo);
    message.textContent = "Item Deleted";
    message.classList.add("error");

    setTimeout(() => {
      message.classList.remove("error");
    }, 1000);
  });

  todo.appendChild(closeEl);
  todo.classList.add("todo");

  return todo;
}
