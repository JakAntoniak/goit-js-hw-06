let counterSpan = document.querySelector("#value");
let counterValue = parseInt(document.querySelector("#value").textContent);
console.log(typeof counterValue);

const decrementacion = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementacion = document.querySelector(
  'button[data-action="increment"]'
);

const handleClickDec = () => {
  counterValue -= 1;
  counterSpan.innerHTML = `<span id="value">${counterValue}</span>`;
};
const handleClickInc = () => {
  counterValue += 1;
  counterSpan.innerHTML = `<span id="value">${counterValue}</span>`;
};

decrementacion.addEventListener("click", handleClickDec);
incrementacion.addEventListener("click", handleClickInc);
