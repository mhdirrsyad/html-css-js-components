// genBtn
const genBtn = document.querySelector(".btn-generate");
// copyBtn
const copyBtn = document.querySelector(".btn-copy");
// outputPass
const outputPass = document.querySelector("#password");

genBtn.addEventListener("click", () => genPassword());
copyBtn.addEventListener("click", () => copyPassword());

function genPassword() {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordlength = 7;
  let newPassword = "";

  for (let i = 0; i < passwordlength; i++) {
    let randomNum = Math.floor(Math.random() * chars.length);
    newPassword += chars.substring(randomNum, randomNum + 1); // get 1 char
  }

  outputPass.value = newPassword;
}

async function copyPassword() {
  let copyText = outputPass;
  // select text
  copyText.select();

  // copy select text
  await navigator.clipboard.writeText(outputPass.value);
}
