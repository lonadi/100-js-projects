const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");

let historyList = [];

const rollDice = () => {
  // random number between 1 and 6
  const rollResult = Math.ceil(Math.random() * 6);
  
  // Update the dice element with the corresponding Unicode dice face
  diceEl.innerHTML = `&#9855${rollResult};`;
  
  // Add the roll result to the history list and update the history display
  historyList.push(rollResult);
  updateRollHistory();
};

// Function to update the roll history display
const updateRollHistory = () => {
  // Clear the current content of the roll history element
  rollHistoryEl.innerHTML = "";

  // Create HTML for each roll using map and join
  rollHistoryEl.innerHTML = historyList.map((result, index) =>
    `<li>Roll ${index + 1}: <span>&#9855${result};</span></li>`
  ).join('');
};

// Event listener for the roll button click
buttonEl.addEventListener("click", () => {
  // Add a CSS class to initiate the roll animation
  diceEl.classList.add("roll-animation");
  
  // Set a timeout to remove the animation class and perform the dice roll after a delay
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000); // Adjust the delay as needed
});

// Insert HTML content after the first element with the class 'container'
document.getElementsByClassName('container')[0].insertAdjacentHTML("afterend", footer);


document.getElementsByClassName('container')[0].insertAdjacentHTML("afterend", footer);