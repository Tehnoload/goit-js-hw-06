const formEl = document.querySelector(".login-form");
console.log(formEl);
formEl.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  const data = {
    email: email.value,
    password: password.value,
  };

  formEl.reset();

  console.log(data);
}
