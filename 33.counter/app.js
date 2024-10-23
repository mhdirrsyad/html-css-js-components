// countElement
const countEl = document.querySelector("#count");
// saveElement
const saveEl = document.querySelector("#save");
// incrementBtn
const incrementBtn = document.querySelector(".increment-btn");
// saveBtn
const saveBtn = document.querySelector(".save-btn");
// resetBtn
const resetBtn = document.querySelector(".reset-btn");

let count = 0;
incrementBtn.addEventListener("click", function () {
  count += 1;
  countEl.innerHTML = count;
});

saveBtn.addEventListener("click", function () {
  let countStr = count + ", ";
  saveEl.innerHTML += countStr;
  countEl.innerHTML = 0;
  count = 0;
});

resetBtn.addEventListener("click", function () {
  saveEl.innerHTML = "";
  countEl.innerHTML = 0;
  count = 0;
});
