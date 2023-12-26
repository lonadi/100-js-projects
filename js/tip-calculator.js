var calcButton, totalAmountDisplay;

// Assuming these elements are in the HTML and the script is executed after the DOM is ready
calcButton = document.getElementById('calc');
totalAmountDisplay = document.getElementById('total-amount');

var calc = () => {
    var billAmount = document.getElementById('bill-amount').valueAsNumber;
    var tipPercent = document.getElementById('tip-percent').valueAsNumber;
    return billAmount / 100 * tipPercent + billAmount;
}

calcButton.addEventListener('click', () => {
    const result = calc();
    totalAmountDisplay.innerHTML = result;
});



