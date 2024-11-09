// result
const checkBtn = document.querySelector(".check-btn");
// decimal
const input = document.querySelector("#number");
// resultContainer
const resultContainer = document.querySelector(".results-container");

checkBtn.addEventListener("click", () => decimal());

function decimal() {
  let decimal = input.value;
  let tempDecimal = 0;
  let rem = 0;
  let place = 1;
  let binary = 0;

  tempDecimal = decimal;
  while (tempDecimal > 0) {
    rem = tempDecimal % 2;
    binary = binary + rem * place;
    // tempDecimal keep dividing by two until it reaches zero
    tempDecimal = parseInt(tempDecimal / 2);
    place = place * 10;
  }

  const h1 = document.createElement("h1");
  h1.innerHTML = `${binary}`;
  resultContainer.appendChild(h1);
}
