var hours = 0;
var mins = 0;
var seconds = 0;
var tens = 0;
var outputHrs = document.getElementById('hour');
var outputMin = document.getElementById('min')
var outputSec = document.getElementById('second');
var outputTens = document.getElementById('tens');
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');
var Interval;

startBtn.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(Interval);
});

resetBtn.addEventListener('click', () => {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    outputSec.innerHTML = seconds;
    outputTens.innerHTML = tens;
});

function startTime() {
    tens++;
    if (tens <= 9) {
        outputSec.innerHTML = '0' + tens;
    } 

    if (tens > 9) {
        outputTens.innerHTML = tens;
    } 

    if (tens > 99) {
        seconds++;
        outputSec.innerHTML = '0' + seconds;
        tens = 0;
        outputTens.innerHTML = '0' + tens;
    }

    if (seconds >= 9) {
        outputSec.innerHTML = seconds;
    } 

    if (seconds <= 9) {
        outputSec.innerHTML = '0' + seconds;
    } 

    if (seconds > 59) {
        mins++
        outputMin.innerHTML = '0' + mins;
        seconds = 0;
        outputSec.innerHTML = '0' + seconds
    } 

    if (mins > 59) {
        hours++
        outputHrs.innerHTML = '0' + hours;
        mins = 0;
        outputMin.innerHTML = '0' + mins
    }  

    if (hours > 100) {
        clearInterval(Interval);
    }
    
};

document.getElementsByClassName('container')[0].insertAdjacentHTML("afterend", footer);

// next challenge. add laps with sessionStorage;