function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector("button");
const span = document.querySelector(".color");

button.addEventListener("click", handleClick);

function handleClick() {
  const bgColor = getRandomHexColor();

  body.style.backgroundColor = bgColor;
  span.textContent = bgColor;
}
