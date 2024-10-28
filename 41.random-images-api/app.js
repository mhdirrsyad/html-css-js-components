// content
const content = document.querySelector(".content");

async function getRandImg() {
  // fetch data API
  const clientID = "XH7uLpkHh9DGnN3OoEX9k-8Q6YLWR3dVHQsehERM76k";
  const endpoint = `https://api.unsplash.com/photos/random?count=10&client_id=${clientID}`;

  const response = await fetch(endpoint);
  const img = await response.json();

  for (let i = 0; i < img.length; i++) {
    const imgElement = `
    <div class="content-item">
    <img src="${img[i].links.download}" />
    <p>${img[i].user.name}</p>
    </div>`;
    content.innerHTML += imgElement;
  }
}

getRandImg();
