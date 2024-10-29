// quoteBtn
const quoteBtn = document.querySelector("#quoteBtn");
// quoteOutput
const quoteOutput = document.querySelector("#quoteOutput");
// authorOutput
const authorOutput = document.querySelector("#authorOutput");

quoteBtn.addEventListener("click", getQuotes);

async function getQuotes() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch!");
    }

    quoteOutput.innerHTML = `<span>${data.quote}</span>`;
    authorOutput.innerHTML = `<small>-${data.author}-</small>`;
  } catch (err) {
    console.log(err);
  }
}
