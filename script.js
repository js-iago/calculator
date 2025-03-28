let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
    document.getElementById('current-input').textContent = currentInput;
}

function setOperator(op) {
    if (firstOperand === null && currentInput !== '') {
        firstOperand = currentInput;
        currentInput = '';
    }
    operator = op;
    document.getElementById('current-input').textContent = firstOperand + ' ' + operator + ' ' + currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
    document.getElementById('current-input').textContent = '';
}

function clearOneChar() {
    currentInput = currentInput.slice(0, -1); // Remove o último caractere
    document.getElementById('display').value = currentInput;
    document.getElementById('current-input').textContent = currentInput;
}

function clearAll() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    document.getElementById('display').value = '';
    document.getElementById('current-input').textContent = '';
}

function appendDecimal() {
    if (!currentInput.includes('.')) { // Previne múltiplos pontos decimais
        currentInput += '.';
        document.getElementById('display').value = currentInput;
        document.getElementById('current-input').textContent = currentInput;
    }
}

function calculate() {
    if (firstOperand !== null && operator !== null && currentInput !== '') {
        let result = 0;
        const secondOperand = currentInput;

        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            case '%':
                result = (parseFloat(firstOperand) * parseFloat(secondOperand)) / 100; // Porcentagem
                break;
            case '√':
                result = Math.sqrt(parseFloat(firstOperand)); // Raiz quadrada
                break;
            case '^2':
                result = Math.pow(parseFloat(firstOperand), 2); // Quadrado
                break;
            case '1/x':
                result = 1 / parseFloat(firstOperand); // Inverso
                break;
            case '±':
                result = -parseFloat(firstOperand); // Alterar sinal
                break;
            case '^':
                result = Math.pow(parseFloat(firstOperand), parseFloat(secondOperand)); // Exponenciação
                break;
            default:
                return;
        }

        document.getElementById('display').value = result;
        document.getElementById('current-input').textContent = result;
        currentInput = result.toString();
        operator = null;
        firstOperand = null;
    }
}