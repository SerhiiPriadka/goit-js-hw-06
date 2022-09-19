const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector(`#ingredients`);
const arr = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement(`li`);
  li.textContent = ingredients[i];
  li.classList.add(`item`);
  arr.push(li);
}
list.append(...arr);