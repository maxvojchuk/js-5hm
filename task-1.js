import { alert } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/Angeler.css";
import "@pnotify/core/dist/Material.css";
import "@pnotify/core/dist/BrightTheme.css";

const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
let currentKeyIndex = 0;
const keyElement = document.querySelector(".div");
const messageElement = document.getElementById("message");
const notificationElement = document.querySelector(".notification");
const newGameButton = document.querySelector(".newGame");
const setCurrentKey = () => {
  keyElement.textContent = keys[currentKeyIndex];
};

const handleKeyDown = (event) => {
  const pressedKey = event.key.toLowerCase();
  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;
    if (currentKeyIndex < keys.length) {
      setCurrentKey();
      alert({
        text: "Good",
        delay: 100,
        styling: "angeler",
      });
    } else {
      alert({
        text: "Very good гра stop",
        delay: 2000,
        styling: "brighttheme",
      });

      currentKeyIndex = 0;
    }
  } else {
    alert({
      text: "Bad error ми незнаємо такої клавіші",
      delay: 1000,
      styling: "material",
    });
  }
};
const handleKeyPress = (event) => {
  event.preventDefault();
};
const startNewGame = () => {
  currentKeyIndex = 0;
  setCurrentKey();
  alert({
    text: "Гра start",
    delay: 500,
    styling: "angeler",
  });
};
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keypress", handleKeyPress);
newGameButton.addEventListener("click", startNewGame);
setCurrentKey();
