const btn = document.querySelector("#btn-joke");
const content = document.querySelector(".content");

btn.addEventListener("click", getRandomJoke);

async function getRandomJoke() {
  const url = "https://icanhazdadjoke.com/";

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(error.status);
    }

    const data = await response.json();
    content.textContent = `${data.joke}`;
  } catch (error) {
    content.textContent = `Something Went Wrong: ${error.message}`;
  }
}
