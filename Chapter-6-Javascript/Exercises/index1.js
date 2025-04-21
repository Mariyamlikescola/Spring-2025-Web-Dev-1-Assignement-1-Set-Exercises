// Reference to display the RGB value to guess
const rgbValue = document.getElementById('rgbValue');
const optionsContainer = document.getElementById('options');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const restartBtn = document.getElementById('restartBtn');

let score = 0;
let lives = 3;
// Function to generate a random RGB color
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// Function to start a new round of the game
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
  colors.sort(() => Math.random() - 0.5);
// Create divs for each color option and add event listeners for guessing
colors.
  colors.forEach(color => {
    const div = document.createElement('div');
    div.classList.add('color-option');
    div.style.borderBottomColor = color;
    div.addEventListener('click', () => handleGuess(color, correctColor));
    optionsContainer.appendChild(div);
  });
}
// Function to handle user's guess
function handleGuess(selected, correct) {
    if (selected === correct) {
      feedback.textContent = '✅ Correct!';
      feedback.style.color = 'green';
      score++;
      scoreDisplay.textContent = score;
    } else {
      feedback.textContent = '❌ Incorrect!';
      feedback.style.color = 'red';
      lives--;
      livesDisplay.textContent = lives;
    }
  
    setTimeout(() => {
      if (lives > 0) {
        newRound();
      } else {
        endGame();
      }
    }, 1000);
  }
  // Function to handle the end of the game
  function endGame() {
    feedback.textContent = `🎮 Game Over! Final Score: ${score}`;
    feedback.style.color = '#e74c3c';
    restartBtn.classList.remove('hidden');
    optionsContainer.innerHTML = '';
  }
  
  restartBtn.addEventListener('click', () => {
    score = 0;
    lives = 3;
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;
    restartBtn.classList.add('hidden');
    newRound();
  });
  
  newRound();
