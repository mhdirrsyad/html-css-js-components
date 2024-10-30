// range
const range = document.querySelector("#range");
// label
const label = document.querySelector("#rangeContent");

range.addEventListener("input", function (event) {
  // convert string value to number
  const value = +event.target.value;

  // get range input width
  const range_width = getComputedStyle(event.target).getPropertyValue("width");

  // delete px from range width & convert to num
  const num_width = +range_width.substring(0, range_width.length - 2);

  // get max, min range & convert to num
  const max = +event.target.max;
  const min = +event.target.min;

  // get px for left label
  const left =
    value * (num_width / max) + // if 50 * 3 = 150px
    scale(value, min, max, 10, -10); // 150 + range -10 until 10 (0 if value 50) = 150px

  label.style.left = `${left}px`;
  label.innerHTML = value;
});

// scale function
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
