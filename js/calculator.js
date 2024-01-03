const head = document.getElementsByTagName('head')[0];

document.title = document.title + ' | Leo100js'

var script, script3, script4, script5;

var link3 = document.createElement('link');
link3.rel = 'shortcut icon';
link3.href = "../img/favicon/leocs-website-favicon-color.png";
link3.type = 'image/x-icon';

script3 = document.createElement('script');
script3.src = 'https://kit.fontawesome.com/ad98cec03b.js';
script3.crossOrigin = 'anonymous';

script4 = document.createElement('script');
script4.src = 'https://www.googletagmanager.com/gtag/js?id=G-52QKVCYRKC';
script4.async;
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-52QKVCYRKC');


script5 = document.createElement('script');
script5.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5017336691227548';
script5.crossorigin = 'anonymous';
script5.async;

head.appendChild(link3);
head.appendChild(script3);
head.appendChild(script4);
head.appendChild(script5);

let footer = `
    <footer id="creds">
        <span id="first-line">Made with 😭 by Leo. </span>
        <span id="second-line"> <a href="https://github.com/liltrapo/100-js-projects" style="color: unset;"><i class="fa fa-github" style="font-size: 30px; cursor: pointer;" aria-hidden="true"></i></a>
       <!-- <a href="https://twitter.com/teezleo" style="color: unset"><i class="fa-brands fa-x-twitter" style="font-size: 30px; cursor: pointer;" aria-hidden="true"></i></a> -->
        </span>
    </footer>
`;

// margin-right: 10px; on github icon
// document.getElementsByClassName('container')[0].insertAdjacentHTML("afterend", footer);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName('container')[0].insertAdjacentHTML("afterend", footer);
});

// <footer>
//         <p style="text-align: center; color: #00e200;">Made with <i class="fa fa-heart" style="color: #e93434;" aria-hidden="true"></i> by Leo.</p>
//         <p style="text-align: center;"><a href="https://github.com/liltrapo" style="color: unset;"><i class="fa fa-github" style="font-size: 30px; cursor: pointer;" aria-hidden="true"></i></a></p>
//         <p style="text-align: center;">Checkout my blog, <a href="http://footykicks.netlify.app" style="color: rgb(51, 51, 255);" target="_blank" rel="noopener noreferrer">footykicks.netlify.app</a></p>
//     </footer>


const display = document.getElementById('display');
const display2 = document.getElementById('display2');
const equal = document.getElementById('equal');
const allClear = document.getElementById('clear');
const percentageBtn = document.getElementById('percentage');
const MAX_DISPLAY_LENGTH = 9;

display.innerHTML = '0';

const insert = (num) => {
    if (display.innerHTML.length < MAX_DISPLAY_LENGTH && display.innerHTML === '0') {
        display.innerHTML = '';
    }
    display.innerHTML += num;
};

const opt = (operand) => {
    if (display.value !== '') {
        display.innerHTML += operand;
        display2.value = display.innerHTML;
        display.innerHTML = '';
    }
};

const zero = () => {
    if (display.value !== '' && display.innerHTML.length < MAX_DISPLAY_LENGTH - 1) {
        display.innerHTML += '0';
    }
};

const calculate = () => {
    try {
        const solve = eval(display2.value + display.innerHTML);
        display.innerHTML = isNaN(solve) || !isFinite(solve) ? 'Error' : solve;
    } catch (error) {
        display.innerHTML = 'Error';
    }
};

const percentage = () => {
    const currentValue = parseFloat(display.innerHTML) || 0;
    display.innerHTML = isNaN(currentValue) ? 'Error' : currentValue / 100;
};


equal.addEventListener('click', calculate);

allClear.addEventListener('click', () => {
    display.innerText = '0';
});

const back = () => {
    display.innerHTML = display.innerHTML.slice(0, -1) || '0';
};

percentageBtn.addEventListener('click', percentage);