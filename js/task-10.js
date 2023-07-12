const refs = {
  createButton: document.querySelector("[data-create]"),
  destroyButton: document.querySelector("[data-destroy]"),
  boxesContainer: document.getElementById("boxes"),
  amountInput: document.querySelector("#controls input"),
};

refs.createButton.addEventListener("click", createBoxes);
refs.destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = parseInt(refs.amountInput.value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  let html = "";

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    const box = `<div style="background-color: ${color}; width: ${size}px; height: ${size}px;"></div>`;
    html += box;
  }

  refs.boxesContainer.innerHTML = html;
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
