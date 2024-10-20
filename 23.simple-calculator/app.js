const submitBtn = document.querySelector("#submitBtn");
const resetBtn = document.querySelector("#resetBtn");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const result = document.querySelector(".result");
const operator = document.querySelector("#selectOp");

submitBtn.addEventListener("click", function () {
  let num1Val = num1.value;
  let num2Val = num2.value;
  let opVal = operator.value;

  switch (opVal) {
    case "plus":
      result.innerHTML = Number(num1Val) + Number(num2Val);
      break;
    case "min":
      result.innerHTML = Number(num1Val) - Number(num2Val);
      break;
    case "dev":
      result.innerHTML = Number(num1Val) / Number(num2Val);
      break;
    case "multi":
      result.innerHTML = Number(num1Val) * Number(num2Val);
      break;
  }
});

resetBtn.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  result.innerHTML = "0";
  operator.value = "plus";
});
