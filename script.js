let display = document.getElementById('display');

function appendCharacter(character) {
    display.value += character; // Append the clicked button's value to the display
}

function clearDisplay() {
    display.value = ''; // Clear the display
}

function deleteLast() {
    display.value = display.value.slice(0, -1); // Remove the last character from the display
}

function calculateResult() {
    try {
        // Replace custom symbols with valid JavaScript operators before evaluation
        display.value = eval(
            display.value.replace(/÷/g, '/').replace(/×/g, '*')
        );
    } catch {
        display.value = 'Error'; // Display 'Error' if the input is invalid
    }
}