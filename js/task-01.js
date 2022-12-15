const numberOfCategories = document.querySelectorAll("#categories >.item");
console.log(`Number of categories: ${numberOfCategories.length}`);
const categoryList = numberOfCategories.forEach((e) => {
  console.log(
    `Category: ${e.querySelector("h2").textContent}\nElements: ${
      e.querySelector("ul").childElementCount
    }`
  );
});
