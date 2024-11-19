const userList = document.querySelector(".user-list");
const search = document.querySelector("#search");

// get & filter data list
const listItems = [];
getAllData();

search.addEventListener("input", (e) => filterData(e.target.value));

async function getAllData() {
  url = "https://randomuser.me/api?results=50";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(error.status);
    }

    const { results } = await response.json();

    userList.innerHTML = "";

    results.forEach((user) => {
      const li = document.createElement("li");
      listItems.push(li);
      li.innerHTML = `
        <div class="user-info">
            <div class="user-detail">
                <img src="${user.picture.large}" alt="${user.name.first}"/>
                <div class="user-name">
                    <h5>${user.name.first} ${user.name.last}</h5>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
            </div>
            <div class="user-phone">
                <h4>${user.phone}</h4>
            </div>
        </div>
      `;

      userList.appendChild(li);
    });
  } catch (err) {
    console.error(err.message);
  }
}

function filterData(inputSearch) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(inputSearch.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

// toggle
const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", function () {
  if (this.checked) {
    document.body.style.backgroundColor = "var(--on-secondary)";
    userList.style.backgroundColor = "var(--on-secondary-variant)";
    document.querySelector(".header").style.backgroundColor =
      "var(--on-secondary-variant)";
    userList.style.color = "var(--on-primary-variant)";
    document.querySelector("#search").style.boxShadow =
      "rgba(255, 255, 255, 0.02) 0px 1px 3px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px";
    document.querySelector("#search").style.color = "var(--on-primary)";
    document.querySelector(".title").style.color = "var(--on-primary)";
  } else {
    document.body.style.backgroundColor = "var(--on-primary)";
    userList.style.backgroundColor = "var(--on-primary-variant)";
    document.querySelector(".header").style.backgroundColor =
      "var(--on-primary-variant)";
    userList.style.color = "var(--on-secondary-variant)";
    document.querySelector("#search").style.boxShadow =
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
    document.querySelector("#search").style.color = "var(--on-secondary)";
    document.querySelector(".title").style.color = "var(--on-secondary)";
  }
});
