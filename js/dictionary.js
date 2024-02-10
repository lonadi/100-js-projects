document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit');
    const wordInput = document.getElementById('word-input');
    const meaningEl = document.getElementById('meaning');

    wordInput.focus()

    submitBtn.addEventListener('click', function() {
        const word = wordInput.value.trim();
        if (word) {
            fetchMeaning(word);
        } else {
            alert('Enter a word.');
        }
    });
    

    function fetchMeaning(word) {
        fetch(`https://api.api-ninjas.com/v1/dictionary?word=${word}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'Ft1IHWqsLRAXiTXv4EjSOA==1loxHFAeM65TkNeR',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            displayMeaning(data);
        })
        .catch(error => {
            console.error('Error:', error);
            displayError('Error fetching data.');
        });
    }

    function displayMeaning(data) {
        if (data.definition) {
            meaningEl.innerHTML = `<strong>Meaning:</strong> ${data.definition}`;
        } else {
            displayError('Meaning not found.');
        }
    }

    function displayError(message) {
        meaningEl.innerHTML = `<strong>Error:</strong> ${message}`;
    }
});