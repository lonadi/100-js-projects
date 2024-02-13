document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit');
    const wordEl = document.getElementById('word');


    submitBtn.addEventListener('click', function() {
        fetchWord(word);
    });
    

    function fetchWord(word) {
        fetch(`https://api.api-ninjas.com/v1/randomword?word=${word}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'Ft1IHWqsLRAXiTXv4EjSOA==1loxHFAeM65TkNeR',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            displayWord(data);
        })
        .catch(error => {
            console.error('Error:', error);
            displayError('Error fetching data.');
        });
    }

    function displayWord(data) {
        if (data.word) {
            wordEl.innerHTML = `Word: <strong>${data.word}</strong>`;
        } else {
            displayError('Error.');
        }
    }
Wird
    function displayError(message) {
        wordEl.innerHTML = `<strong>Error:</strong> ${message}`;
    }
});