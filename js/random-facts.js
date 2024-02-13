document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('submit');
    const limitInput = document.getElementById('limit');
    const factContainer = document.getElementById('facts');

    limitInput.focus();
    generateBtn.addEventListener('click', function() {
        const limit = limitInput.value.trim();
        if (limit === '') {
            alert('Enter a limit.');
            return;
        }

        fetchFact(limit)
            .then(results => displayFacts(results))
            .catch(error => {
                console.error('Error:', error);
                alert('Error fetching facts.');
            });
    });

    async function fetchFact(limit) {
        const response = await fetch(`https://api.api-ninjas.com/v1/facts?limit=${limit}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'Ft1IHWqsLRAXiTXv4EjSOA==1loxHFAeM65TkNeR',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }

    function displayFacts(facts) {
        factContainer.innerHTML = '';
        facts.forEach(fact => {
            const factElement = document.createElement('div');
            factElement.textContent = fact.fact;
            factContainer.appendChild(factElement);
        });
    }
});
