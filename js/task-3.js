const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

if (!nameInput || !nameOutput) {
  console.warn("Name input or output element not found.");
} else {
  const handleNameInput = (event) => {
    const trimmedValue = event.currentTarget.value.trim();
    nameOutput.textContent = trimmedValue || "Anonymous";
  };

  nameInput.addEventListener("input", handleNameInput);
}

