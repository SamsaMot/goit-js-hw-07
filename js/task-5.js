function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorValueElement = document.querySelector(".color");

if (!changeColorButton || !colorValueElement) {
  console.warn("Change color widget elements not found.");
} else {
  changeColorButton.addEventListener("click", () => {
    const randomColor = getRandomHexColor();

    document.body.style.backgroundColor = randomColor;
    colorValueElement.textContent = randomColor;
  });
}

