// Game variables
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI elements
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector("#message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
    guessInput.value = "";
    return;
  }

  // Check if won
  if (guess === winningNum) {
    // Game over --won
    gameOver(true, `${winningNum} is correct! YOU WIN`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game Over -- lost
      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong
      // Change border color
      guessInput.style.borderColor = "red";
      // clear input
      guessInput.value = "";
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

// Play Again Listener
game.addEventListener("mousedown", function (e) {
  if (e.target.id === "play-again") {
    console.log("play again");
    window.location.reload();
  }
});

// game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  // Disable Input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);

  // Play Again
  guessBtn.value = "Play Again";
  guessBtn.id = "play-again";
}

// set Message function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Random winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
