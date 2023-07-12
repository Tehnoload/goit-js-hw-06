const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const arr = [];

ingredients.forEach((ingredient, index) => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add(`item`);
  itemEl.textContent = `${ingredient}`;
  arr.push(itemEl);
  // console.log(itemEl);
});

listEl.append(...arr);
