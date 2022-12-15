const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulSelector = document.querySelector("#ingredients");

const task = ingredients.forEach((ingredient) => {
  let ingredientList = document.createElement("li");
  ingredientList.textContent = ingredient;
  ingredientList.classList.add("item");
  ulSelector.append(ingredientList);
});
