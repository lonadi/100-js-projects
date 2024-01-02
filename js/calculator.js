// Initialize display elements
var display = document.getElementById('display');
var display2 = document.getElementById('display2');

// Function to append a value to the display
function insert(num) {
  display.value += num;
}

// Function to handle operator buttons
function opt(operand) {
  if (display.value !== '') {
    display.value += operand;
    display2.innerHTML = display.value;
    display.value = '';
  }
}

// Function to handle the "AC" (clear) button
function clear() {
  display.value = '';
  display2.innerHTML = '';
}

// Function to handle the backspace button
function back() {
  var displayValue = display.value;
  display.value = displayValue.slice(0, -1);
}

// Function to handle the "=" (equal) button
document.getElementById('equal').addEventListener('click', function () {
  try {
    var solve = eval(display2.innerHTML + display.value);
    display.value = solve;
  } catch (error) {
    display.value = 'Error';
  }
});

// Function to handle the "%" button (assuming you want to calculate percentage of the current value)
document.getElementById('percentage').addEventListener('click', function () {
  try {
    display.value = eval(display.value) / 100;
  } catch (error) {
    display.value = 'Error';
  }
});

// Function to handle the "DEL" (delete) button
document.getElementById('delete').addEventListener('click', function () {
  back();
});

// Function to handle the "0" button separately
function zero() {
  if (display.value !== '') {
    display.value += '0';
  }
}