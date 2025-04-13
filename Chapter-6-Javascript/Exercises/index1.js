const rgbValue = document.getElementById('rgbValue');
const optionsContainer = document.getElementById('options');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const restartBtn = document.getElementById('restartBtn');

let score = 0;
let lives = 3;

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function newRound() {
  feedback.textContent = '';
  optionsContainer.innerHTML = '';

  const correctColor = randomRGB();
  rgbValue.textContent = correctColor;

  const colors = [correctColor];
  while (colors.length < 3) {
    const newColor = randomRGB();
    if (!colors.includes(newColor)) {
      colors.push(newColor);
    }
  }
