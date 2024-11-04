// followers
const followers = document.querySelectorAll(".followers");

followers.forEach((follower) => {
  follower.innerHTML = "0";

  const updateFollower = () => {
    const target = Number(follower.getAttribute("data-target"));
    const iValue = Number(follower.innerText);
    const increment = target / 500;

    if (iValue < target) {
      follower.innerText = `${Math.ceil(iValue + increment)}`;
      // execution this function until < target
      setTimeout(updateFollower, 1);
    } else {
      // else iValue > target, display the target value
      follower.innerText = target;
    }
  };

  updateFollower();
});
