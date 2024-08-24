const display = document.getElementById('display');

// Append number or operator to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid calculation');
        clearDisplay();
    }
}
