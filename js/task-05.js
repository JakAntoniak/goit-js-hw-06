const span = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", (e) => {
  let inputValue = e.currentTarget.value;
  if (inputValue.length === 0) {
    inputValue = "Anonymous";
  }
  span.textContent = inputValue;
});
