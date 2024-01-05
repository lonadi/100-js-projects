var input, totalChars, remainingChars, display1, display2;

input = document.getElementById('textarea');
totalChars = input.value.length;
remainingChars = 3500 - totalChars;
display1 = document.getElementById('total-value');
display2 = document.getElementById('remainder-value');

display1.textContent = totalChars;
display2.textContent = remainingChars;

input.addEventListener('input', () => {
    totalChars = input.value.length;
    remainingChars = 3500 - totalChars;

    display1.textContent = totalChars;
    display2.textContent = remainingChars;

    console.log('Remaining characters:', remainingChars);
});
