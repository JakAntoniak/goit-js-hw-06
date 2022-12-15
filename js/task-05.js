const span = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");
const spanValue = () => {
  span.innerHTML = nameInput.value;
};

nameInput.addEventListener("input", spanValue);

if (currentTarget.value) {
  nameInput.value;
}
