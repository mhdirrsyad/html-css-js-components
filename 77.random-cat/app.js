const section = document.querySelector(".container");
const button = document.querySelector(".btn");

button.addEventListener("click", getRandomCats);

async function getRandomCats() {
  section.innerHTML = "";

  const url = "https://api.thecatapi.com/v1/images/search";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    let photo = data[0].url;
    section.classList.add("cats");

    const image = document.createElement("img");
    image.src = photo;
    image.classList.add("random-cats");
    section.appendChild(image);
  } catch (error) {
    console.error(error.message);
  }
}
