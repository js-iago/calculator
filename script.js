let currentInput = '';
let operator = null;
let firstOperand = '0'; // Inicializa com '0' como valor padrão
let isOperatorClicked = false;

// Inicializa o display com '0'
document.getElementById('display').value = '0';
document.getElementById('current-input').textContent = '0';

function appendNumber(number) {
    // Se o número foi digitado após um operador, ou se ainda está no '0', substituímos
    if (currentInput === '0' || isOperatorClicked) {
        currentInput = number;
        isOperatorClicked = false;
    } else {
        currentInput += number;
    }
    document.getElementById('display').value = currentInput;
    document.getElementById('current-input').textContent = currentInput;
}

function setOperator(op) {
    if (currentInput === '') {
        currentInput = '0'; // Caso o operador seja clicado sem número antes, exibe 0
    }

    if (firstOperand === '0' || isOperatorClicked) {
        firstOperand = currentInput;
        isOperatorClicked = true;
    } else {
        firstOperand = currentInput;
    }

    operator = op;
    document.getElementById('current-input').textContent = firstOperand + ' ' + operator;
    currentInput = ''; // Limpa o display para o próximo número
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '0';
    document.getElementById('current-input').textContent = '0';
}

function clearOneChar() {
    currentInput = currentInput.slice(0, -1); // Remove o último caractere
    if (currentInput === '') {
        currentInput = '0';
    }
    document.getElementById('display').value = currentInput;
    document.getElementById('current-input').textContent = currentInput;
}

function clearAll() {
    currentInput = '';
    firstOperand = '0';
    operator = null;
    document.getElementById('display').value = '0';
    document.getElementById('current-input').textContent = '0';
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
                result = (parseFloat(firstOperand) * parseFloat(secondOperand)) / 100;
                break;
            case '√':
                result = Math.sqrt(parseFloat(firstOperand));
                break;
            case '^2':
                result = Math.pow(parseFloat(firstOperand), 2);
                break;
            case '1/x':
                result = 1 / parseFloat(firstOperand);
                break;
            case '±':
                result = -parseFloat(firstOperand);
                break;
            case '^':
                result = Math.pow(parseFloat(firstOperand), parseFloat(secondOperand));
                break;
            default:
                return;
        }

        document.getElementById('display').value = result;
        document.getElementById('current-input').textContent = result;
        currentInput = result.toString();
        operator = null;
        firstOperand = '0'; // Reseta para '0' após o cálculo
    }
}