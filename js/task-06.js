const inputEl = document.getElementById("validation-input");

const inputValue = () => {
  const length = inputEl.getAttribute("data-length");
  const value = inputEl.value.length;

  if (value === parseInt(length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", inputValue);
