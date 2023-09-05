// let units = document.querySelectorAll('input[name="unit"]');

// for (var i = 0; i < units.length; i++) {
//     units[i].setAttribute('value', units[i].getAttribute('id'));
// }

let container = document.querySelector('.container');
const input = document.querySelector('#userInput');        
const cm = document.querySelector("#centimetres");
const inches = document.querySelector("#inches");
const feet = document.querySelector("#feet"); 
const mtr = document.querySelector("#metres");
const calc = document.querySelector("#calc");
const reset = document.querySelector("#reset");

let errorMsg, errorMsg2, errorMsg3;


errorMsg = document.createElement('div');
errorMsg.id = 'error1';

errorMsg2 = document.createElement('div');
errorMsg2.id = 'error2';

errorMsg3 = document.createElement('div');
errorMsg3.id = 'error3';

calc.addEventListener('click', () => {
    if (input.value.trim() === '') {
        errorMsg.innerHTML = `<p class="alert alert-danger">Input cannot be blank</p> `
        container.appendChild(errorMsg)
    }

    if (input.value.trim() === '') {

    }
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

let options = document.getElementsByClassName("options")[0];
function calculate() {
    if (btns[0].className.indexOf("active") && ) {

    }
}