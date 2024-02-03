const container = document.querySelector('.container');
const sizeEl = document.querySelector('.size');
const color = document.querySelector('.color');
const resetBtn = document.querySelector('.reset');
const saveBtn = document.querySelector('.save-btn');
const eraserCheckbox = document.querySelector('.eraser');
const pencilModeCheckbox = document.querySelector('.pencil-mode');
let size = sizeEl.value;
let draw = false;
let eraserMode = false;
let pencilMode = false;

function populate(size) {
    container.style.setProperty('--size', size);
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');

        div.addEventListener('mouseover', function () {
            if (!draw) return;
            if (eraserMode) {
                div.style.backgroundColor = '';
            } else {
                div.style.backgroundColor = color.value;
            }
        });

        div.addEventListener('mousedown', function () {
            if (eraserMode) {
                div.style.backgroundColor = '';
            } else {
                div.style.backgroundColor = color.value;
            }
        });

        container.appendChild(div);
    }
}

window.addEventListener("mousedown", function () {
    draw = true;
});
window.addEventListener("mouseup", function () {
    draw = false;
});

function reset() {
    container.innerHTML = '';
    populate(size);
}

resetBtn.addEventListener('click', reset);

sizeEl.addEventListener('input', function () {
    size = sizeEl.value;
    reset();
});

saveBtn.addEventListener('click', function () {
    savePixelArt();
});

eraserCheckbox.addEventListener('change', function () {
    eraserMode = eraserCheckbox.checked;
    pencilModeCheckbox.checked = false; 
});

pencilModeCheckbox.addEventListener('change', function () {
    pencilMode = pencilModeCheckbox.checked;
    eraserCheckbox.checked = false;
    eraserMode = false;
});

function savePixelArt() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    const pixels = container.querySelectorAll('.pixel');
    
    pixels.forEach((pixel, index) => {
        const x = index % size;
        const y = Math.floor(index / size);

        const color = window.getComputedStyle(pixel).getPropertyValue('background-color');
        ctx.fillStyle = color;
        
        ctx.fillRect(x * pixel.offsetWidth, y * pixel.offsetHeight, pixel.offsetWidth, pixel.offsetHeight);
    });

    const image = new Image();
    image.src = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'pixel_art.png';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

populate(size);
