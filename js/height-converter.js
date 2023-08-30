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