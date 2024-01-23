let firstNum = document.getElementById('first-num');
let secondNum = document.getElementById('second-num');
let alertEl = document.querySelector('.alert');
let checkBtn = document.getElementById('check');

let num1 = parseInt(Math.random() * 100);
let num2 = parseInt(Math.random() * 100);


function generateNum() {
    num1 = parseInt(Math.random() * 100);
    num2 = parseInt(Math.random() * 100);
    answer = num1 + num2;
    firstNum.textContent = num1;
    secondNum.textContent = num2;
    inputEl.value = '';
    alertEl.style.display = 'none';
}

function showMsg(isCorrect) {
    if (isCorrect) {
        alertEl.classList.remove('danger');
        alertEl.classList.add('success');
        iconEl.classList.remove('fa-times');
        iconEl.classList.add('fa-check');
        messageEl.textContent = 'Correct!';
    } else {
        alertEl.classList.remove('success');
        alertEl.classList.add('danger');
        iconEl.classList.remove('fa-check');
        iconEl.classList.add('fa-times');
        messageEl.textContent = 'Wrong! The correct answer was ' + answer;
    }
    alertEl.style.display = 'block';
}

checkBtn.addEventListener('click', function(){
    let userAnswer = parseInt(inputEl.value);

    if (userAnswer === answer) {
        showMsg(true);
    } else {
        showMsg(false);
    }

    setTimeout(generateNum, 2000);
});

generateNum();