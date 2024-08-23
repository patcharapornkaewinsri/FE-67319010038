function calculate() {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var operationSelect = document.getElementById('operation');
    var outputDiv = document.getElementById('output');
    // Ensure that the elements exist before proceeding
    if (!num1Input || !num2Input || !operationSelect || !outputDiv) {
        return;
    }
    var num1 = parseFloat(num1Input.value) || 0; // Default to 0 if input is empty
    var num2 = parseFloat(num2Input.value) || 0; // Default to 0 if input is empty
    var operation = operationSelect.value;
    var result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error'; // Avoid division by zero
            break;
        default:
            result = 'Invalid Operation';
    }
    outputDiv.innerHTML = result.toString(); // Update the output div with the result
}
