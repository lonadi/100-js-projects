let firstNum = document.getElementById('first-num');
let secondNum = document.getElementById('second-num');
let alertEl = document.querySelector('.alert');
let checkBtn = document.getElementById('check');
let inputEl = document.getElementById('answer'); 
let iconEl = document.querySelector('i');
let msgWrap = document.querySelector('.message');
let messageEl = document.getElementById('message');
let score = 0;
let scoreCount = document.getElementById('score-count');
scoreCount.textContent = score;
let num1 = parseInt(Math.random() * 1000);
let num2 = parseInt(Math.random() * 1000);


function generateNum() {
    num1 = parseInt(Math.random() * 1000);
    num2 = parseInt(Math.random() * 1000);
    answer = num1 - num2;
    firstNum.textContent = num1;
    secondNum.textContent = num2;
    inputEl.value = '';
    alertEl.style.display = 'none';
    iconEl.style.display = 'none';
}

function showMsg(isCorrect) {
    if (isCorrect) {
        alertEl.style.display = 'block';
        alertEl.classList.remove('alert-danger');
        alertEl.classList.add('alert-success');
        iconEl.style.display = 'block';
        iconEl.classList.remove('fa-times');
        iconEl.classList.add('fa-check');
        messageEl.textContent = 'Correct! ';
        score += 1;
        scoreCount.textContent = score;

    }
    msgWrap.style.display = 'flex;';
}

checkBtn.addEventListener('click', function(){
    let userAnswer = parseInt(inputEl.value);

    if (userAnswer === answer) {
        showMsg(true);
    } else {
        alertEl.style.display = 'block';
        alertEl.classList.remove('alert-success');
        alertEl.classList.add('alert-danger');
        iconEl.style.display = 'block';
        iconEl.classList.remove('fa-check');
        iconEl.classList.add('fa-times');
        msgWrap.style.display = 'block';
        messageEl.textContent = 'Wrong! The correct answer was ' + answer;
    }

    setTimeout(generateNum, 2000);
});

generateNum();