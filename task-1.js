const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
let currentKeyIndex = 0;

const keysUpdate = () => {
  const keyElement = document.getElementById("key");
  keyElement.textContent = keys[currentKeyIndex];
};

const showError = (message) => {
  PNotify.error({
    text: message,
    delay: 2000,
  });
};

document.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toLowerCase();
  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;
    if (currentKeyIndex < keys.length) {
      keysUpdate();
    } else {
      showError("Вітаємо! Ви завершили гру!");
      currentKeyIndex = 0;
      updateKey();
    }
  } else {
    showError("Неправильна клавіша! Спробуйте ще раз.");
  }
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

document.querySelector("#button").addEventListener("click", () => {
  currentKeyIndex = 0;
  updateKey();
  showError("Нова гра розпочата!");
});

updateKey();
