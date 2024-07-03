const audioFileInput = document.getElementById('audioFile');
const playButton = document.getElementById('playButton');
const stopButton = document.getElementById('stopButton');
const canvas = document.getElementById('visualizer');
const canvasCtx = canvas.getContext('2d');
let audioContext, audioSource, analyzer, dataArray, bufferLength, animationId;

canvas.width = window.innerWidth;
canvas.height = 300;

audioFileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.type.startsWith('audio/')) {
            const objectUrl = URL.createObjectURL(file);
            initializeAudio(objectUrl);
            playButton.disabled = false;
            stopButton.disabled = false;
        } else {
            alert('Please select a valid audio file.');
        }
    }
});

playButton.addEventListener('click', function() {
    if (audioContext) {
        audioContext.resume();
        visualize();
    }
});

stopButton.addEventListener('click', function() {
    if (audioContext) {
        audioContext.suspend();
        cancelAnimationFrame(animationId);
        clearCanvas();
    }
});

function initializeAudio(url) {
    if (audioContext) {
        audioContext.close();
    }
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    fetch(url)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
            audioSource = audioContext.createBufferSource();
            audioSource.buffer = audioBuffer;
            analyzer = audioContext.createAnalyser();
            audioSource.connect(analyzer);
            analyzer.connect(audioContext.destination);
            analyzer.fftSize = 256;
            bufferLength = analyzer.frequencyBinCount;
            dataArray = new Uint8Array(bufferLength);
            audioSource.start();
            visualize();
        });
}

function visualize() {
    animationId = requestAnimationFrame(visualize);
    analyzer.getByteFrequencyData(dataArray);
    clearCanvas();
    canvasCtx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
        canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
        x += barWidth + 1;
    }
}

function clearCanvas() {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
}