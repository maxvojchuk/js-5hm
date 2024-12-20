//1
// const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
// let currentKeyIndex = 0;

// const keysUpdate = () => {
//   const keyElement = document.getElementById("key");
//   keyElement.textContent = keys[currentKeyIndex];
// };

// const showError = (message) => {
//   PNotify.error({
//     text: message,
//     delay: 2000,
//   });
// };

// document.addEventListener("keydown", (event) => {
//   const pressedKey = event.key.toLowerCase();
//   if (pressedKey === keys[currentKeyIndex]) {
//     currentKeyIndex++;
//     if (currentKeyIndex < keys.length) {
//       keysUpdate();
//     } else {
//       showError("Вітаємо! Ви завершили гру!");
//       currentKeyIndex = 0;
//       updateKey();
//     }
//   } else {
//     showError("Неправильна клавіша! Спробуйте ще раз.");
//   }
// });

// document.addEventListener("keypress", (event) => {
//   event.preventDefault();
// });

// document.querySelector("#button").addEventListener("click", () => {
//   currentKeyIndex = 0;
//   updateKey();
//   showError("Нова гра розпочата!");
// });

// updateKey();
//2
const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "rgba(177, 243, 33, 0.2)",
      borderColor: "#5164",
      borderWidth: 1,
      fill: true,
    },
  ],
};

const config = {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const salesChart = new Chart(document.querySelector("#sales-chart"), config);
