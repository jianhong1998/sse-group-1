import CalculatorStatus from '../../models/calculatorStatus.enum';
import Operation from '../../models/operation.enum';
import CalculatorButtonFunction from './CalculatorButtonFunction';

export default class Calculator {
    num1: string | null;
    num2: string | null;
    operation: Operation | null;
    status: CalculatorStatus;

    constructor() {
        this.num1 = null;
        this.num2 = null;
        this.operation = null;
        this.status = CalculatorStatus.NO_INPUT;
    }

    // Will Throw Error
    inputNumber(numberString: string): void {
        if (isNaN(parseInt(numberString))) {
            throw new Error(
                'Calculator.inputNumber: invalid input. Input string must be numeric.',
            );
        }

        switch (this.status) {
            case CalculatorStatus.NO_INPUT:
                this.num1 = numberString;
                this.status = CalculatorStatus.NUM_1_HAS_INPUT;
                break;
            case CalculatorStatus.NUM_1_HAS_INPUT:
                if (this.num1 === null) {
                    throw new Error(
                        'Calculator.inputNumber: num1 is null while status is NUM_1_HAS_INPUT',
                    );
                }

                this.num1 = CalculatorButtonFunction.concatNumberString(
                    this.num1,
                    numberString,
                );
                break;
            case CalculatorStatus.NUM_2_HAS_INPUT:
                if (this.num1 === null) {
                    throw new Error(
                        'Calculator.inputNumber: num1 is null while status is NUM_2_HAS_INPUT',
                    );
                }

                if (this.operation === null) {
                    throw new Error(
                        'Calculator.inputNumber: operation is null while status is NUM_2_HAS_INPUT',
                    );
                }

                if (this.num2 === null) {
                    throw new Error(
                        'Calculator.inputNumber: num2 is null while status is NUM_2_HAS_INPUT',
                    );
                }

                this.num2 = CalculatorButtonFunction.concatNumberString(
                    this.num2,
                    numberString,
                );

                break;
            case CalculatorStatus.OPERATION_HAS_INPUT:
                this.num2 = numberString;
                this.status = CalculatorStatus.NUM_2_HAS_INPUT;

                break;
            default:
                throw new Error('Calculator.inputNumber: invalid status.');
        }
    }

    // Will Throw Error
    inputOperation(operation: Operation): void {
        if (!Object.keys(Operation).includes(operation)) {
            throw new Error('Calculator.inputOperation: invalid operation.');
        }

        switch (this.status) {
            case CalculatorStatus.NO_INPUT:
                break;
            case CalculatorStatus.NUM_1_HAS_INPUT:
                this.operation = operation;
                this.status = CalculatorStatus.OPERATION_HAS_INPUT;
                break;
            case CalculatorStatus.NUM_2_HAS_INPUT:
                this.clickEqual();
                this.operation = operation;
                this.status = CalculatorStatus.OPERATION_HAS_INPUT;
                break;
            case CalculatorStatus.OPERATION_HAS_INPUT:
                this.operation = operation;
                break;
            default:
                throw new Error('Calculator.inputOperation: invalid status.');
        }
    }

    // Will Throw Error
    inputDot(): void {
        switch (this.status) {
            case CalculatorStatus.NO_INPUT:
                this.num1 = '0.';
                this.status = CalculatorStatus.NUM_1_HAS_INPUT;
                break;
            case CalculatorStatus.NUM_1_HAS_INPUT:
                if (this.num1 === null) {
                    this.status = CalculatorStatus.NO_INPUT;

                    this.inputDot();
                    return;
                }

                if (this.num1.indexOf('.') > -1) {
                    return;
                }

                this.num1 = CalculatorButtonFunction.concatNumberString(
                    this.num1,
                    '.',
                );

                break;
            case CalculatorStatus.NUM_2_HAS_INPUT:
                if (this.num2 === null) {
                    this.status = CalculatorStatus.OPERATION_HAS_INPUT;

                    this.inputDot();
                    return;
                }

                if (this.num2.indexOf('.') > -1) {
                    return;
                }

                this.num2 = CalculatorButtonFunction.concatNumberString(
                    this.num2,
                    '.',
                );

                break;
            case CalculatorStatus.OPERATION_HAS_INPUT:
                this.num2 = '0.';

                this.status = CalculatorStatus.NUM_2_HAS_INPUT;

                break;
            default:
                throw new Error('Calculator.inputDot: invalid status.');
        }
    }

    // Will Throw Error
    clickEqual(): number {
        if (this.status === CalculatorStatus.NO_INPUT) {
            this.resetCalculator();
            return 0;
        }

        if (this.status === CalculatorStatus.NUM_1_HAS_INPUT) {
            if (this.num1 === null) {
                throw new Error(
                    'Calculator.clickEqual: num1 is null while status is NUM_1_HAS_INPUT.',
                );
            }

            return parseFloat(this.num1);
        }

        if (this.status === CalculatorStatus.NUM_2_HAS_INPUT) {
            if (this.num1 === null) {
                throw new Error(
                    'Calculator.clickEqual: num1 is null while status is NUM_2_HAS_INPUT',
                );
            }

            if (this.operation === null) {
                throw new Error(
                    'Calculator.clickEqual: operation is null while status is NUM_2_HAS_INPUT',
                );
            }

            if (this.num2 === null) {
                throw new Error(
                    'Calculator.clickEqual: num2 is null while status is NUM_2_HAS_INPUT',
                );
            }

            const result = CalculatorButtonFunction.equal(
                this.num1,
                this.num2,
                this.operation,
            );

            if (result === null) {
                throw new Error('Calculator.clickEqual: result is null');
            }

            this.num1 = result.toString();
            this.num2 = null;
            this.operation = null;
            this.status = CalculatorStatus.NUM_1_HAS_INPUT;

            return result;
        }

        if (this.status === CalculatorStatus.OPERATION_HAS_INPUT) {
            if (this.num1 === null) {
                throw new Error(
                    'Calculator.clickEqual: num1 is null while status is OPERATION_HAS_INPUT.',
                );
            }

            this.status = CalculatorStatus.NUM_1_HAS_INPUT;

            this.num2 = null;
            this.operation = null;

            return parseFloat(this.num1);
        }

        throw new Error('Calculator.clickEqual: invalid status.');
    }

    resetCalculator() {
        this.num1 = null;
        this.num2 = null;
        this.operation = null;
        this.status = CalculatorStatus.NO_INPUT;
    }
}
