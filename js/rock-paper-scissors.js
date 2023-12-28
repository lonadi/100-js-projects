var playerScore = 0;
var computerScore = 0;

document.getElementById('ps-val').textContent = playerScore;
document.getElementById('cs-val').textContent = computerScore;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = (() => {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            playerScore += 1;
            document.getElementById('ps-val').textContent = playerScore;
            return "You win!";
        } else {
            computerScore += 1;
            document.getElementById('cs-val').textContent = computerScore;
            return "Computer wins!";
        }
    })();
    
    const resultMessage = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    document.getElementById('result').textContent = resultMessage;
}