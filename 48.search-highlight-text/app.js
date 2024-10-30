// paragraph
const p = document.querySelector("#para");
// searchBtn
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", function () {
  // input value
  let input = document.querySelector("#input").value;

  if (input !== "") {
    let regExp = new RegExp(input, "gi");
    // replace
    p.innerHTML = p.textContent.replace(regExp, "<mark>$&</mark>");
  }
});
