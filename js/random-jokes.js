document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('submit');
    const limitInput = document.getElementById('limit');
    const jokesContainer = document.getElementById('jokes');

    limitInput.focus();
    generateBtn.addEventListener('click', function () {
        const limit = limitInput.value.trim();
        if (limit === '') {
            alert('Enter a limit.');
            return;
        }

        fetchJokes(limit)
            .then(results => displayJokes(results))
            .catch(error => {
                console.error('Error:', error);
                alert('Error fetching jokes.');
            });
    });

    async function fetchJokes(limit) {
        const response = await fetch(`https://api.api-ninjas.com/v1/jokes?limit=${limit}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'Ft1IHWqsLRAXiTXv4EjSOA==1loxHFAeM65TkNeR',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }

    function displayJokes(jokes) {
        jokesContainer.innerHTML = '';
        jokes.forEach(joke => {
            const jokeElement = document.createElement('div');
            jokeElement.textContent = joke.joke;
            jokesContainer.appendChild(jokeElement);
        });
    }
});
