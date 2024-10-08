const changeColorButton = document.querySelector(".change-color");
const colorDisplay = document.querySelector(".color");

changeColorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor; 
  colorDisplay.textContent = newColor; 
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}