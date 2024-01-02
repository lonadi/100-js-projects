let display = document.getElementById('display');
let display2 = document.getElementById('display2');
let equal = document.getElementById('equal');
let allClear = document.getElementById('clear');
display.innerHTML = 0

function insert(num) {
    num.value = num
    if (display.innerHTML.length === 9) {
        display.innerHTML = 'Error'
    }
    if (display.innerHTML === '0') {
        display.innerHTML = ''
    }
    display.innerHTML += num
}

function opt(operand) {
    if (display.value != '') {
        display.innerHTML += operand
        display2.value = display.innerHTML
        display.innerHTML = ''
    }
}

function zero() {
    if (display.value != '') {
        display.innerHTML += 0
    }
}

equal.addEventListener('click', function(){
    let solve = eval(display2.value + display.innerHTML);
    display.innerHTML = solve;

    if (display.value == 0) {
        display.value = ''
    }

    if (display.value == "Infinity") {
        display.innerHTML = 'cant divide by zero'
    }
})

allClear.addEventListener('click', function(){
    display.innerText = 0
})

function back() {
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length-1)

    if (display.innerHTML.length === 0) {
        display.innerHTML = 0;
    }
}