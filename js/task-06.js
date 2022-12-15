const inputWindow = document.querySelector("#validation-input");
const lengthValue = inputWindow.getAttribute("data-length");

inputWindow.addEventListener("blur", () => {
  if (parseInt(lengthValue) === inputWindow.value.trim().length) {
    inputWindow.classList.remove("invalid");
    inputWindow.classList.add("valid");
  } else {
    inputWindow.classList.remove("valid");
    inputWindow.classList.add("invalid");
  }
});
