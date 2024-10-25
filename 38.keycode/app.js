// insert
const insert = document.querySelector("#insert");

window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
      <div class="key">
          ${e.key === " " ? "Space" : e.key}
          <small>Key</small>
      </div>
      <div class="key">
          ${e.keyCode}
          <small>Key Code</small>
      </div>
      <div class="key">
          ${e.code}
          <small>Code</small>
      </div>
    `;
});
