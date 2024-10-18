const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Awesome", "Fun", "Cool", "Life", "Famous", "Weird"];
const typingDelay = 200;
const erasingDelay = 200;
// delay between current and next text
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

setTimeout(type, newLetterDelay);

function type() {
  if (charIndex < words[index].length) {
    typedTextSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    // callback fn for type text
    setTimeout(type, typingDelay);
  } else {
    // if charIndex > words[index].length
    // callback fn for erase text
    setTimeout(erase, newLetterDelay);
  }
}

// erase this text from the ui
function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    // if charIndex <= 0
    index++;
    if (index >= words.length) {
      index = 0;
    }
    // if index < words.length
    setTimeout(type, typingDelay + 1000);
  }
}
