import Operation from '../../models/operation.enum';
import CalculatorCoreFunctions from './calculatorCoreFunction';

export default class CalculatorButtonFunction {
    static concatNumberString(
        currentNumString: string,
        inputNumString: string,
    ) {
        return currentNumString.concat(inputNumString);
    }

    static equal(
        numString1: string,
        numString2: string,
        operation: Operation,
    ): number | null {
        const num1 = parseFloat(numString1);
        const num2 = parseFloat(numString2);

        switch (operation) {
            case Operation['+']:
                return CalculatorCoreFunctions.sum(num1, num2);
            case Operation['-']:
                return CalculatorCoreFunctions.subtract(num1, num2);
            case Operation.x:
                return CalculatorCoreFunctions.multiple(num1, num2);
            case Operation['/']:
                return CalculatorCoreFunctions.divide(num1, num2);
            default:
                return null;
        }
    }
}
