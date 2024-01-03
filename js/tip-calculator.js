var calcBtn, totalAmountDisplay;

calcBtn = document.getElementById('calc');
totalAmountDisplay = document.getElementById('total-amount');

var calc = () => {
    var billAmount = document.getElementById('bill-amount').valueAsNumber;
    var tipPercent = document.getElementById('tip-percent').valueAsNumber;
    return billAmount / 100 * tipPercent + billAmount;
}

calcBtn.addEventListener('click', () => {
    const result = calc();
    totalAmountDisplay.innerHTML = result;
});



