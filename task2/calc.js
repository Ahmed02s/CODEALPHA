let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    display.innerText = `${previousNumber} ${operation}`;
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    currentNumber = result;
    operation = null;
    previousNumber = '';
    display.innerText = result;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    display.innerText = '';
}

function updateDisplay() {
    display.innerText = currentNumber;
    if (operation != null) {
        display.innerText = `${previousNumber} ${operation} ${currentNumber}`;
    }
}