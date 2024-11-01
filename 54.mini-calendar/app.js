// month
const monthEl = document.querySelector("#month");
// day
const dayNameEl = document.querySelector("#day");
// dayNum
const dayNumEl = document.querySelector("#day-number");
// year
const yearEl = document.querySelector("#year");

const date = new Date();

monthEl.innerHTML = date.toLocaleDateString("id-ID", {
  month: "long",
});

dayNameEl.innerHTML = date.toLocaleDateString("id-ID", {
  weekday: "long",
});

dayNumEl.innerHTML = date.getDate();
yearEl.innerHTML = date.getFullYear();
