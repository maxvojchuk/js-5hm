const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
let currentKeyIndex = 0;
const keyElement = document.querySelector(".div");
const messageElement = document.getElementById("message");
const notificationElement = document.querySelector(".notification");
const newGameButton = document.querySelector(".newGame");
const setCurrentKey = () => {
  keyElement.textContent = keys[currentKeyIndex];
};
const showNotification = (message) => {
  notificationElement.textContent = message;
  setTimeout(() => {
    notificationElement.textContent = "";
  }, 2000);
};
const handleKeyDown = (event) => {
  const pressedKey = event.key.toLowerCase();
  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;
    if (currentKeyIndex < keys.length) {
      setCurrentKey();
      messageElement.textContent = "Good";
    } else {
      messageElement.textContent = "Very good гра stop";
      currentKeyIndex = 0;
    }
  } else {
    showNotification("Bad error ми незнаємо такої клавіші");
  }
};
const handleKeyPress = (event) => {
  event.preventDefault();
};
const startNewGame = () => {
  currentKeyIndex = 0;
  setCurrentKey();
  messageElement.textContent = "Гра start";
};
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keypress", handleKeyPress);
newGameButton.addEventListener("click", startNewGame);
setCurrentKey();
