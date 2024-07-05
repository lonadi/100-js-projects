document.getElementById('double').addEventListener('click', function() {
    var wordContainer = document.getElementById('word-cont');
    var words = Array.from(wordContainer.children);
    var currentWordCount = words.length;

    for (var i = 0; i < currentWordCount; i++) {
        var newWord = words[i].cloneNode(true);
        wordContainer.appendChild(newWord);
    }
});