document.querySelector('#sentimentForm').addEventListener('submit', (event)=> {
    event.preventDefault();
    var text = $('#textInput').val();

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/sentiment?text=' + encodeURIComponent(text),
        headers: { 'X-Api-Key': 'Ft1IHWqsLRAXiTXv4EjSOA==1loxHFAeM65TkNeR' },
        contentType: 'application/json',
        success: function (result) {
            $('#resultContainer').html('<p>Sentiment: ' + result.sentiment + '</p>' + '<br/>' + '<p>Score:' + result.score + '</p>');
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            $('#resultContainer').html('<p>Error: ' + jqXHR.responseText + '</p>');
        }
    });
}) 