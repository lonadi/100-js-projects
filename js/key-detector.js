const insert = document.getElementById('insert');
const textInput = document.getElementById('textInput');

function handleKeyEvent(e) {
    console.log(e);
    insert.innerHTML = `
        <div class="key">
            ${e.key === ' ' ? 'Space' : e.key}
            <small>Key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>Key Code</small>
        </div>
        <div class="key">
            ${e.code}
            <small>Code</small>
        </div>
    `;
}

window.addEventListener('keydown', handleKeyEvent);
textInput.addEventListener('input', (e) => {
    const virtualKeyEvent = {
        key: e.data || 'Enter',
        keyCode: e.inputType === 'insertText' ? e.data.charCodeAt(0) : 13,
        code: e.inputType === 'insertText' ? 'Enter' : '',
    };
    handleKeyEvent(virtualKeyEvent);
});