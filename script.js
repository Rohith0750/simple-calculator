let currentInput = '';
let currentOperation = '';
let previousInput = '';

// Function to append a number to the current input
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Function to set the operation (addition, subtraction, multiplication, division)
function setOperation(operation) {
    if (currentInput === '') return; // Prevent setting operation if no input
    if (previousInput !== '') {
        calculateResult(); // Calculate if there's already a previous input
    }
    currentOperation = operation;
    previousInput = currentInput; // Store the current input as previous
    currentInput = ''; // Clear current input for the next number
}

// Function to calculate the result based on the current operation
function calculateResult() {
    if (previousInput === '' || currentInput === '') return; // Prevent calculation if inputs are missing
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    // Perform the calculation based on the current operation
    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current !== 0) {
                result = prev / current;
            } else {
                result = "Error: Division by zero"; // Handle division by zero
            }
            break;
        default:
            return; // If no valid operation, do nothing
    }

    // Update the display with the result
    currentInput = result.toString(); // Convert result to string for display
    previousInput = ''; // Clear previous input
    currentOperation = ''; // Clear current operation
    updateDisplay();
}

// Function to clear the display and reset inputs
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    updateDisplay();
}

// Function to update the display with the current input or result
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput; // Set the display value to current input
}
