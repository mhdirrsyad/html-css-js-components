// ratings
const ratings = document.querySelectorAll(".rating");
// ratingsContainer
const ratingsContainer = document.querySelector(".ratings-container");
// sendBtn
const sendBtn = document.querySelector("#send");
// panel
const panel = document.querySelector("#panel");

let selectedRating = "";

ratingsContainer.addEventListener("click", function (event) {
  if (event.target.parentNode.classList.contains("rating")) {
    removeActives();
    event.target.parentNode.classList.add("active");
    selectedRating = event.target.nextElementSibling.textContent;
  }
});

sendBtn.addEventListener("click", function () {
  panel.innerHTML = `
        <div class="heart">
        <div class="thanks-msg">
            <p>💖🥳</p>
            <h1>Thank You for Your Feedback!</h1>
        </div>
            <p>Feedback : ${selectedRating}</p>
        </div>
    `;
});

function removeActives() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}
