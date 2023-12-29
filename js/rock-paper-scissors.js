var playerScore = 0;
var computerScore = 0;
var moves = 0;

document.getElementById('ps-val').textContent = playerScore;
document.getElementById('cs-val').textContent = computerScore;
document.getElementById('moves-val').textContent = moves;

alert("Let's see if you can defeat the computer in 20 moves.");

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = (() => {
        if (playerChoice === computerChoice) {
            moves += 1;
            document.getElementById('moves-val').textContent = moves;
            return "It's a tie!";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            moves += 1;
            playerScore += 1;
            document.getElementById('moves-val').textContent = moves;
            document.getElementById('ps-val').textContent = playerScore;
            return 'You win!';
        } else {
            moves += 1;
            computerScore += 1;
            document.getElementById('moves-val').textContent = moves;
            document.getElementById('cs-val').textContent = computerScore;
            return 'Computer wins!';
        }
    })();

    const resultMessage = `${result} You chose ${playerChoice}. Computer chose ${computerChoice}.`;
    document.getElementById('result').textContent = resultMessage;

    if (moves === 20) {
        if (computerScore > playerScore) {
            alert('Game over! You lost!');
        } else if (computerScore < playerScore) {
            alert('Congratulations! You won!');
        } else {
            alert('It\'s a draw!');
        }
    }
}
