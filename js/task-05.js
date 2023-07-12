const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onInputChange);
function onInputChange(event) {
  nameOutput.textContent = event.currentTarget.value;
}
