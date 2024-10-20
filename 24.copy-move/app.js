// copyText
const copyText = document.querySelector("textarea[name=copyTxt]");
// finalText
const finalText = document.querySelector("textarea[name=finalTxt]");
// moveBtn
const moveBtn = document.querySelector(".moverBtn");
// copyBtn
const copyBtn = document.querySelector(".copyBtn");
// output
const output = document.querySelector(".output");

copyBtn.addEventListener("click", function () {
  document.execCommand("copy");
  notifAdded();
});

moveBtn.addEventListener("click", function () {
  let temp = copyText.value;
  finalText.value = temp;
});

// select textarea
copyText.addEventListener("click", function () {
  this.select();
});
finalText.addEventListener("click", function () {
  this.select();
});

function notifAdded() {
  // added notif
  output.innerHTML = `<h3><i class="fa-solid fa-check"></i> Content Copied!</h3>`;
  output.classList.add("added");
  setTimeout(() => {
    output.classList.remove("added");
    output.textContent = "";
  }, 2000);
}
