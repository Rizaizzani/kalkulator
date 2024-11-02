function clearDisplay() {
    document.getElementById('display').value = '0';
}

function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;

    // Handle exponentiation (^) operator
    if (expression.includes('^')) {
        const parts = expression.split('^');
        if (parts.length === 2) {
            const base = parseFloat(parts[0]);
            const exponent = parseFloat(parts[1]);
            display.value = Math.pow(base, exponent);
            return;
        }
    }

    try {
        display.value = eval(expression);
    } catch {
        display.value = 'Error';
    }
}
