// word counter
let inputEl = document.querySelector('#textarea');
let totalValDisp = document.querySelector('#total-value');

const MAX_WORDS = 2000;

function countWords(text) {
    let words = text.trim().split(/\s+/);
    return words.length;
}

function updateCount() {
    let inputText = inputEl.value;
    let wordCount = countWords(inputText);

    if (wordCount > MAX_WORDS) {
        inputEl.value = inputText.split(' ').slice(0, MAX_WORDS).join(' ');
        wordCount = MAX_WORDS;
    }

    totalValDisp.textContent = `Total Words: ${wordCount}/${MAX_WORDS}`;
}

inputEl.addEventListener('input', updateCount);

updateCount();