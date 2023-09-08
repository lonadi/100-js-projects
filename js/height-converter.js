// let units = document.querySelectorAll('input[name="unit"]');

// for (var i = 0; i < units.length; i++) {
//     units[i].setAttribute('value', units[i].getAttribute('id'));
// }

let container = document.querySelector('.container');
const input = document.querySelector('#userInput');        
const calc = document.querySelector("#calc");
const reset = document.querySelector("#reset");

input.focus()
var reg = /^\d+$/;

let errorMsg, errorMsg2, errorMsg3;


errorMsg = document.createElement('div');
errorMsg.id = 'error1';

errorMsg2 = document.createElement('div');
errorMsg2.id = 'error2';

errorMsg3 = document.createElement('div');
errorMsg3.id = 'error3';

calc.addEventListener('click', () => {
    // if (input.value.trim() === '') {
    //     errorMsg.innerHTML = `<p class="alert alert-danger">Input cannot be blank</p> `
    //     container.appendChild(errorMsg)
    // } 

    // if (!reg.test(input.value)) {
    //     errorMsg.innerHTML = `<p class="alert alert-danger">Input cannot contain letters</p> `
    //     container.appendChild(errorMsg)
    // } 
    calculate()
});

reset.addEventListener('click', () => {
    for(var i = 0; i<optionsUnit.length; i++) {
        optionsUnit[i].checked = false;
    }
    resultDisplayCont.style.cssText = 
    `
        display: none !important;
    `
    result = '';
    input.value = '';
    input.focus();
});


var btnContainer = document.getElementsByClassName("pagination")[0];

var btns = btnContainer.getElementsByClassName("choices");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var options = document.getElementsByClassName("options")[0];

var optionsUnit = options.getElementsByTagName('input');

// var result;
var resultDisplayCont = document.getElementsByClassName('result-display')[0];
var resultDisplay = resultDisplayCont.getElementsByTagName('input')[0];
function calculate(unit, result) {

    // if the same unit is selected by the user, then give the same value as the output.
    if (btns[0].classList.contains("active") && optionsUnit.item(0).checked) {
        unit = 'cm'
        result = input.value
        resultDisplay.value = result + unit;
        resultDisplayCont.removeChild(document.getElementById('result-note'))
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    if (btns[1].classList.contains("active") && optionsUnit.item(1).checked) {
        unit = 'in'
        result = input.value
        resultDisplay.value = result + unit;
        resultDisplayCont.removeChild(document.getElementById('result-note'))
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    if (btns[2].classList.contains("active") && optionsUnit.item(2).checked) {
        unit = 'm'
        result = input.value
        resultDisplay.value = result + unit;
        resultDisplayCont.removeChild(document.getElementById('result-note'))
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    if (btns[3].classList.contains("active") && optionsUnit.item(3).checked) {
        unit = 'ft'
        result = input.value
        resultDisplay.value = result + unit;
        resultDisplayCont.removeChild(document.getElementById('result-note'))
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    // cm to others
    if (btns[0].classList.contains("active") && optionsUnit.item(1).checked) {
        unit = 'in'
        result = input.value * Math.round(0.393701 * 10) / 10
        resultDisplay.value = result + unit;
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    if (btns[0].classList.contains("active") && optionsUnit.item(2).checked) {
        unit = 'm'
        result = input.value * 0.01
        resultDisplay.value = result + unit;
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    if (btns[0].classList.contains("active") && optionsUnit.item(3).checked) {
        unit = 'ft'
        result = input.value * Math.round(0.0328084 * 1000) / 1000
        resultDisplay.value = result + unit;
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }


    // 
    // 
    // 
    // in to others
    if (btns[1].classList.contains("active") && optionsUnit.item(0).checked) {
        unit = 'cm'
        result = input.value * Math.round(2.54 * 100) / 100
        resultDisplay.value = result + unit;
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    if (btns[1].classList.contains("active") && optionsUnit.item(2).checked) {
        unit = 'm'
        result = input.value * Math.round(0.0254 * 1000) / 1000
        resultDisplay.value = result + unit;
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    if (btns[1].classList.contains("active") && optionsUnit.item(3).checked) {
        unit = 'ft'
        result = input.value * 0.0833333
        resultDisplay.value = result + unit;
        resultDisplay.value = resultDisplay.value.slice(0,4) + unit;
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }



    // 
    // 
    // 
    // m to others
    if (btns[2].classList.contains("active") && optionsUnit.item(0).checked) {
        unit = 'cm'
        result = input.value * 100
        resultDisplay.value = result + unit;
        resultDisplayCont.removeChild(document.getElementById('result-note'))
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    if (btns[2].classList.contains("active") && optionsUnit.item(1).checked) {
        unit = 'in'
        result = input.value * Math.round(39.37008 * 100) / 100
        resultDisplay.value = result + unit;
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    if (btns[2].classList.contains("active") && optionsUnit.item(3).checked) {
        unit = 'ft'
        result = input.value * Math.round(3.28084 * 100) / 100
        resultDisplay.value = result + unit
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    


    // 
    // 
    // 
    // ft to others
    if (btns[3].classList.contains("active") && optionsUnit.item(0).checked) {
        unit = 'cm'
        result = input.value * Math.round(30.48 * 10) / 10
        resultDisplay.value = result + unit;
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    if (btns[3].classList.contains("active") && optionsUnit.item(1).checked) {
        unit = 'in'
        result = input.value * 12
        resultDisplay.value = result + unit;
        resultDisplayCont.removeChild(document.getElementById('result-note'))
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }

    if (btns[3].classList.contains("active") && optionsUnit.item(2).checked) {
        unit = 'm'
        result = input.value * Math.round(0.3048 * 100) / 100
        resultDisplay.value = result + unit
        resultDisplayCont.style.cssText = 
        `
            display: flex !important;
        `
    }
}

document.getElementsByClassName('container')[0].insertAdjacentHTML("afterend", footer);