let colorEls, colorHexEls;
const hexVal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let container;

window.onload = () => {
    container = document.querySelector('.container');
    colorEls = document.querySelectorAll('.color');
    colorHexEls = document.querySelectorAll('.colorHex');
    generateColors();
};

function generateRandomHexColor() {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexVal.length);
        hex += hexVal[index];
    }
    return hex;
}

function generateColors() {
    for (let i = 0; i < 20; i++) {
        const palette = document.createElement('div');
        const colorDiv = document.createElement('div');
        const colorHexDiv = document.createElement('div');

        palette.className = 'palette';
        palette.className += ' border'; // Add a space before 'border'
        colorDiv.className = 'color';
        colorHexDiv.className = 'colorHex';

        const hexColor = generateRandomHexColor();
        colorDiv.style.background = hexColor;
        colorHexDiv.textContent = hexColor;

        palette.appendChild(colorDiv);
        palette.appendChild(colorHexDiv);
        container.appendChild(palette);
    }
}