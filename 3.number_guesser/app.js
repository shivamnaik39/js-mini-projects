// Game variables
let min = 1,
  max = 10,
  winningNum = 2,
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
  console.log(guess);

  // validate
  if (isNaN(guessInput) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`);
  }
});

// set Message function
function setMessage(msg) {
  message.textContent = msg;
}
