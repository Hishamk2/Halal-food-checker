// script.js

document.getElementById('checkButton').addEventListener('click', function () {
    // Get user input
    var userInput = document.getElementById('eCodeInput').value.toLowerCase();

    // Fetch JSON data
    fetch('ecodedata.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Search function
            function searchItem(query) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i]["Number"].toLowerCase() === query) {
                        return data[i];
                    }
                }
                return null;
            }

            // Search and display result
            var result = searchItem(userInput);
            var resultDiv = document.getElementById('result');
            if (result) {
                resultDiv.innerHTML = `
                    Item found:<br>
                    Number: ${result['Number']}<br>
                    Name: ${result['Name']}<br>
                    Description: ${result['Description']}<br>
                    Halal Status: ${result['HalalStatus']}
                `;
            } else {
                resultDiv.innerHTML = 'Item not found.';
            }
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
