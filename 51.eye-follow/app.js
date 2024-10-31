// eye
const eyes = document.querySelectorAll(".eye");

document.body.addEventListener("mousemove", function (event) {
  eyes.forEach((eye) => {
    // get (x, y) position of the center point of the eye element
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    // calculates the angle between the center point of the eye element and the mouse cursor position
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    // convert & change the rotation reference point of an element
    let rotate = radian * (180 / Math.PI) * -1 + 270;

    eye.style.transform = `rotate(${rotate}deg)`;
  });
});
