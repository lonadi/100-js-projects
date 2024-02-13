$(document).ready(function () {
    $('#submit').click(function () {
        var word = $('#word-input').val();
        if (word.trim() === '') {
            alert('Enter a word.');
            return;
        }

        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/thesaurus?word=' + word,
            headers: { 'X-Api-Key': 'Ft1IHWqsLRAXiTXv4EjSOA==1loxHFAeM65TkNeR' },
            contentType: 'application/json',
            success: function (result) {
                displaySynonyms(result.synonyms);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error: ', textStatus, errorThrown, jqXHR.responseText);
            }
        });
    });

    function displaySynonyms(synonyms) {
        var wordContainer = $('#word-container');
        wordContainer.empty();

        if (synonyms.length === 0) {
            wordContainer.append('<p>No synonyms found.</p>');
        } else {
            synonyms.forEach(function (synonym) {
                wordContainer.append('<div class="word">' + synonym + '</div>');
            });
        }
    }
});
