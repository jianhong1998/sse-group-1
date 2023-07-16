export default class CalculatorCoreFunctions {
    static sum(num1: number, num2: number): number {
        return num1 + num2;
    }

    static subtract(num1: number, num2: number) {
        return num1 - num2;
    }

    static multiple(num1: number, num2: number) {
        return num1 * num2;
    }

    static divide(num1: number, num2: number) {
        if (num2 === 0) {
            return null;
        }

        return num1 / num2;
    }
}
