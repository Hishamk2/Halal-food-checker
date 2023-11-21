// Function to handle E-Code checking
function checkECode() {
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
            // Filter the data based on user input
            var filteredData = data.filter(item => item["Number"].toLowerCase() === userInput);

            // Display result
            var resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '';

            if (filteredData.length > 0) {
                // Display card for the matched E-Code
                var matchedItem = filteredData[0];
                resultDiv.innerHTML += `
                    <div class="ecode-card">
                        <h2>${matchedItem['Number']}</h2>
                        <p>${matchedItem['Name']}</p>
                        <p>${matchedItem['HalalStatus']}</p>
                    </div>
                `;
            } else {
                resultDiv.innerHTML = 'E-Code not found.';
            }
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

// Event listener for 'click' on the Check button
document.getElementById('checkButton').addEventListener('click', checkECode);

// Event listener for 'keypress' on the input field
document.getElementById('eCodeInput').addEventListener('keypress', function (event) {
    // Check if the pressed key is 'Enter' (key code 13)
    if (event.key === 'Enter') {
        checkECode();
    }
});
