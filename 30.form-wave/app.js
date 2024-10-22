// labels
const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  // label textContent to become a array and add span element
  label.innerHTML = label.innerHTML
    .split("")
    .map((letter, index) => {
      return `<span style="transition-delay: ${index * 50}ms">${letter}</span>`;
    })
    .join("");
});
