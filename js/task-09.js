const refs = {
  bodyEl: document.querySelector("body"),
  colorSpan: document.querySelector(".color"),
  buttonEl: document.querySelector(".change-color"),
};

refs.buttonEl.addEventListener("click", changeColor);

function changeColor() {
  const newColor = getRandomHexColor();

  refs.bodyEl.style.backgroundColor = newColor;
  refs.colorSpan.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
