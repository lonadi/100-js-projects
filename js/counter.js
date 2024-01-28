const display = document.getElementById('display');
let count = 0;
display.textContent = count;

const updateDisplay = () => display.innerHTML = count;

const increment = () => {
    count++;
    updateDisplay();
}

const decrement = () => {
    count--;
    updateDisplay();
}
