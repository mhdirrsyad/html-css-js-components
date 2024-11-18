const container = document.querySelector(".container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-avatar");
const username = document.querySelector(".username");
const handle = document.querySelector(".handle");

async function getDataTestimonial() {
  const [response1, response2, response3] = await Promise.all([
    fetch(
      `https://dummyjson.com/comments/${Math.floor(Math.random() * 30) + 1}`
    ),
    fetch("https://usernameapiv1.vercel.app/api/random-usernames"),
    fetch("https://randomuser.me/api/"),
  ]);
  const dataComments = await response1.json();
  const dataUsernames = await response2.json();
  const dataPhotos = await response3.json();

  testimonial.innerHTML = dataComments.body;
  userImage.src = dataPhotos.results[0].picture.thumbnail;
  username.innerHTML = dataUsernames.usernames;
  handle.innerHTML = `@${dataUsernames.usernames}`.toLowerCase();
}

setInterval(getDataTestimonial, 5000);
