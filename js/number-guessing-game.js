const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("user-guess").value, 10);

  if (guess === randomNumber) {
    document.getElementById("message").innerHTML = `Good job! You guessed the correct number in ${attempts} attempts.`;
  } else {
    attempts++;
    document.getElementById("message").innerHTML = "Incorrect guess. Try again.";
  }
}

document.getElementById("submit").addEventListener('click', () => {
  checkGuess();
});