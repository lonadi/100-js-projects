$(document).ready(function () {
    $('#submit').click(function () {
        var word = $('#word-input').val();
        if (word.trim() === '') {
            alert('Please enter a word.');
            return;
        }

        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/rhyme',
            data: { word: word },
            headers: { 'X-Api-Key': 'Ft1IHWqsLRAXiTXv4EjSOA==1loxHFAeM65TkNeR' },
            contentType: 'application/json',
            success: function (result) {
                displayWords(result);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error: ', textStatus, errorThrown, jqXHR.responseText);
            }
        });
    });

    function displayWords(words) {
        var wordContainer = $('#word-container');
        wordContainer.empty(); // Clear previous words

        if (words.length === 0) {
            wordContainer.append('<p>No rhyming words found.</p>');
        } else {
            words.forEach(function (word) {
                wordContainer.append('<div class="word">' + word + '</div>');
            });
        }
    }
});