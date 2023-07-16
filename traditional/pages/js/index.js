class CalculatorCoreFunctions {
    static sum(num1, num2) {
        this.result = num1 + num2;
        return this.result;
    }

    static subtract(num1, num2) {
        this.result = num1 - num2;
        return this.result;
    }

    static multiple(num1, num2) {
        this.result = num1 * num2;
        return this.result;
    }

    static divide(num1, num2) {
        if (num2 === 0) {
            this.result = null;
        } else {
            this.result = num1 / num2;
        }

        return this.result;
    }
}

class CalculatorButtonFunctions {
    /*
     * @param {string} currentString
     * @param {string} inputString
     * @return {string}
     */
    static concatNumberString(currentString, inputString) {
        return currentString.concat(inputString);
    }

    /*
     * @param {number} num1
     * @param {number} num2
     * @param {number} operation
     * @return {number}
     * error: {
     *   undefined: Invalid operation. (valid operation: 1, 2, 3, 4),
     *   null: Cannot divide by zero.
     * }
     */
    static equal(num1InString, num2InString, operation) {
        const num1 = parseFloat(num1InString);
        const num2 = parseFloat(num2InString);

        switch (operation) {
            case 1:
                return CalculatorCoreFunctions.sum(num1, num2);
            case 2:
                return CalculatorCoreFunctions.subtract(num1, num2);
            case 3:
                return CalculatorCoreFunctions.multiple(num1, num2);
            case 4:
                return CalculatorCoreFunctions.divide(num1, num2);
            default:
                return undefined;
        }
    }
}

class Calculator {
    // String
    num1;

    // String
    num2;

    // Number
    operation;

    /*
        status: 0 - no input
        status: 1 - num1 has input
        status: 2 - operation has input
        status: 3 - num2 has input
    */
    status;

    constructor() {
        this.num1 = null;
        this.num2 = null;
        this.operation = null;
        this.status = 0;
    }

    inputNumber(inputInString) {
        const { concatNumberString } = CalculatorButtonFunctions;

        if (isNaN(parseInt(inputInString))) {
            return;
        }

        switch (this.status) {
            case 0:
                this.num1 = inputInString;
                this.status = 1;
                break;
            case 1:
                this.num1 = concatNumberString(this.num1, inputInString);
                break;
            case 2:
                this.num2 = inputInString;
                this.status = 3;
                break;
            case 3:
                this.num2 = concatNumberString(this.num2, inputInString);
                break;
            default:
                break;
        }
    }

    inputOperation(operation) {
        if (typeof operation === 'string') {
            operation = parseInt(operation);
        }

        if (operation < 1 || operation > 4) {
            return;
        }

        switch (this.status) {
            case 0:
                break;
            case 1:
                this.operation = operation;
                this.status = 2;
                break;
            case 2:
                this.operation = operation;
                break;
            case 3:
                this.clickEqual();
                this.operation = operation;
                this.status = 2;
                break;
            default:
                break;
        }
    }

    inputDot() {
        switch (this.status) {
            case 0:
                this.num1 = '0.';
                this.status = 1;
                break;
            case 1:
                if (this.num1.indexOf('.') === -1) {
                    this.num1 = CalculatorButtonFunctions.concatNumberString(
                        this.num1,
                        '.'
                    );
                }
                break;
            case 2:
                this.num2 = '0.';
                this.status = 3;
                break;
            case 3:
                if (this.num2.indexOf('.') === -1) {
                    this.num2 = CalculatorButtonFunctions.concatNumberString(
                        this.num2,
                        '.'
                    );
                }
                break;
            default:
                break;
        }
    }

    clickEqual() {
        switch (this.status) {
            case 0:
                this.num1 = null;
                this.num2 = null;
                this.operation = null;
                return 0;
            case 1:
                return parseFloat(this.num1);
            case 2:
                this.status = 1;
                this.num2 = null;
                this.operation = null;
                return parseFloat(this.num1);
            case 3:
                const result = CalculatorButtonFunctions.equal(
                    this.num1,
                    this.num2,
                    this.operation
                );
                this.num1 = result.toString();
                this.num2 = null;
                this.operation = null;
                this.status = 1;
                return parseFloat(result);
            default:
                break;
        }
    }
}

const numberHolder = document.querySelector('#number-holder');

const initPage = () => {
    if (numberHolder === null) {
        alert('Number holder is missing.');
        return;
    }

    // Add event listener to all number buttons
    [...document.getElementsByClassName('number-button')].forEach((button) => {
        button.addEventListener('click', () => {
            const input = button.innerText;
            calculator.inputNumber(input);

            // display number base on status
            let displayNumber = 0;

            switch (calculator.status) {
                case 0:
                    break;
                case 1:
                    displayNumber = parseFloat(calculator.num1);
                    break;
                case 2:
                    displayNumber = parseFloat(calculator.num1);
                    break;
                case 3:
                    displayNumber = parseFloat(calculator.num2);
                    break;
                default:
                    break;
            }

            document.getElementById('number-holder').innerText = displayNumber;
        });
    });

    // Add event listener to all operation buttons
    [...document.getElementsByClassName('operation-button')].forEach(
        (button) => {
            button.addEventListener('click', () => {
                const input = button.innerText;

                switch (input) {
                    case '+':
                        calculator.inputOperation(1);
                        break;
                    case '-':
                        calculator.inputOperation(2);
                        break;
                    case 'x':
                        calculator.inputOperation(3);
                        break;
                    case '÷':
                        calculator.inputOperation(4);
                        break;
                    default:
                        break;
                }
            });
        }
    );

    // Add event listener to dot button
    document
        .getElementsByClassName('dot-button')[0]
        .addEventListener('click', () => {
            calculator.inputDot();
        });

    // Add event listener to equal button
    document
        .getElementsByClassName('equal-button')[0]
        .addEventListener('click', () => {
            const result = calculator.clickEqual();
            document.getElementById('number-holder').innerText = result;
        });
};

// Start Program
const calculator = new Calculator();

initPage();

[...document.getElementsByClassName('calculator-button')].forEach((button) => {
    button.addEventListener('click', () => {
        console.log(calculator);
    });
});
