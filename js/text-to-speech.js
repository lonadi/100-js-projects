const input = document.querySelector('textarea');
const btn = document.querySelector('button');
let isSpeaking = true;

input.focus();

const speak = () => {
    const synthesis = window.speechSynthesis;
    const text = input.value;

    if (!synthesis.speaking && text) {
        const utterance = new SpeechSynthesisUtterance(text);
        synthesis.speak(utterance);

        if (text.length > 50) {
            if (synthesis.speaking && isSpeaking)
            btn.innerText = 'Pause';
            synthesis.resume();
            isSpeaking = false;
        } else {
            btn.innerText = 'Resume';
            synthesis.pause();
            isSpeaking = true;
        }
    } else {
        isSpeaking = false;
        btn.innerText = 'Speaking...';
    }

// // textarea.addEventListener("keydown", ()=> {
// //     if (textarea.length < 1 ) {
// //         isSpeaking = false;
// //         button.innerText = "Convert to Speech";
// //     }
// // })

        setInterval(() => {
            if (!synth.speaking && !isSpeaking) {
                isSpeaking = true;
                button.innerText = "Convert to Speech";
            }
        });

}

btn.addEventListener('click', speak)