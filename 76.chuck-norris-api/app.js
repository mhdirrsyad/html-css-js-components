const displayJoke = document.querySelector(".display-joke");
const button = document.querySelector("#btn-joke");

button.addEventListener("click", getRandomJoke);

async function getRandomJoke() {
  const url = "https://api.chucknorris.io/jokes/random";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    displayJoke.textContent = `"${data.value}"`;
  } catch (error) {
    displayJoke.textContent = `Something Went Wrong: Error - ${error.message} 😭`;
  }
}
