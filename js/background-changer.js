const btn = document.getElementById('change');
const color = document.getElementById('color');
const body = document.body;

btn.addEventListener('click', changeBG);

function changeBG() {
	const col1 = getRandomRGB();
	const col2 = getRandomRGB();
	const col3 = getRandomRGB();
	const colorStr = `rgb(${col1}, ${col2}, ${col3})`;
	body.style.background = colorStr;
	color.innerText = colorStr;
}

function getRandomRGB() {
	return Math.floor(Math.random() * 256);
}