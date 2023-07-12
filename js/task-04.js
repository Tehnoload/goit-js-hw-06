const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const incrementBTN = document.querySelector('button[data-action="increment"]');
const decrementBTN = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");

incrementBTN.addEventListener("click", function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
decrementBTN.addEventListener("click", function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});
