const input = document.getElementById("font-size-control");
const fontSize = document.getElementById("text");
input.addEventListener("input", (e) => {
  e.preventDefault;
  fontSize.style.fontSize = `${input.value}px`;
});
