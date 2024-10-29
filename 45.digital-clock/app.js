// clock
const clock = document.querySelector(".clock");

clock.addEventListener("load", getTimes);

function getTimes() {
  // date instance
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const newEl = `
      <span>${hour} :</span>
      <span>${minute} :</span>
      <span>${second} </span>
    `;

  clock.innerHTML = newEl;
}

setInterval(getTimes, 1000);
