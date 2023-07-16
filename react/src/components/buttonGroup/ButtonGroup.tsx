import styles from './ButtonGroup.module.css';

import { Dispatch, FC, SetStateAction } from 'react';
import NumberButton from '../ui/buttons/numberButton/NumberButton';
import OperationButton from '../ui/buttons/operationButton/OperationButton';
import DecimalButton from '../ui/buttons/decimalButton/DecimalButton';
import EqualButton from '../ui/buttons/equalButton/EqualButton';
import Operation from '../../models/operation.enum';
import Calculator from '../../utils/calculator/calculator';
import CalculatorStatus from '../../models/calculatorStatus.enum';

const calculator = new Calculator();

interface ButtonGroupProps {
    displayResultFn: Dispatch<SetStateAction<string>>;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ displayResultFn }) => {
    /*
    ****************************************
        Implement new Feature
    ****************************************
    */
    // const displayNumber = () => {
    //     if (calculator.status === CalculatorStatus.NO_INPUT) {
    //         displayResultFn('0');
    //     }

    //     if (calculator.status === CalculatorStatus.NUM_1_HAS_INPUT) {
    //         displayResultFn(calculator.num1 || '0');
    //     }

    //     if (calculator.status === CalculatorStatus.NUM_2_HAS_INPUT) {
    //         const num1 = calculator.num1 || '0';
    //         const num2 = calculator.num2 || '0';

    //         displayResultFn(`${num1} ${calculator.operation!} ${num2}`);
    //     }

    //     if (calculator.status === CalculatorStatus.OPERATION_HAS_INPUT) {
    //         const num1 = calculator.num1 || '0';

    //         displayResultFn(`${num1} ${calculator.operation!}`);
    //     }
    // };

    const displayNumber = () => {
        if (calculator.status === CalculatorStatus.NO_INPUT) {
            displayResultFn('0');
        }

        if (
            calculator.status === CalculatorStatus.NUM_1_HAS_INPUT ||
            calculator.status === CalculatorStatus.OPERATION_HAS_INPUT
        ) {
            displayResultFn(calculator.num1 || '0');
        }

        if (calculator.status === CalculatorStatus.NUM_2_HAS_INPUT) {
            displayResultFn(calculator.num2 || '0');
        }
    };

    const numberButtonClickFn = (number: number) => {
        try {
            calculator.inputNumber(number.toString());
        } catch (error) {
            alert(error);
        }

        displayNumber();
    };

    const operationButtonClickFn = (operation: Operation) => {
        try {
            calculator.inputOperation(operation);

            displayNumber();
        } catch (error) {
            alert(error);
        }
    };

    const dotButtonClickFn = () => {
        try {
            calculator.inputDot();

            displayNumber();
        } catch (error) {
            alert(error);
        }
    };

    const equalButtonClickFn = () => {
        try {
            calculator.clickEqual();

            displayNumber();
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
            <NumberButton
                value={7}
                clickFn={numberButtonClickFn}
                displayClasses={[styles.button]}
            />
            <NumberButton
                value={8}
                clickFn={numberButtonClickFn}
                displayClasses={[styles.button]}
            />
            <NumberButton
                value={9}
                clickFn={numberButtonClickFn}
                displayClasses={[styles.button]}
            />
            <OperationButton
                value={Operation['/']}
                clickFn={operationButtonClickFn}
                displayClasses={[styles.button]}
            />
            <NumberButton
                value={4}
                clickFn={numberButtonClickFn}
                displayClasses={[styles.button]}
            />
            <NumberButton
                value={5}
                clickFn={numberButtonClickFn}
                displayClasses={[styles.button]}
            />
            <NumberButton
                value={6}
                clickFn={numberButtonClickFn}
                displayClasses={[styles.button]}
            />
            <OperationButton
                value={Operation['x']}
                clickFn={operationButtonClickFn}
                displayClasses={[styles.button]}
            />
            <NumberButton
                value={1}
                clickFn={numberButtonClickFn}
                displayClasses={[styles.button]}
            />
            <NumberButton
                value={2}
                clickFn={numberButtonClickFn}
                displayClasses={[styles.button]}
            />
            <NumberButton
                value={3}
                clickFn={numberButtonClickFn}
                displayClasses={[styles.button]}
            />
            <OperationButton
                value={Operation['-']}
                clickFn={operationButtonClickFn}
                displayClasses={[styles.button]}
            />
            <NumberButton
                value={0}
                clickFn={numberButtonClickFn}
                displayClasses={[styles.button, styles.zeroButton]}
            />
            <DecimalButton
                clickFn={dotButtonClickFn}
                displayClasses={[styles.button]}
            />
            <OperationButton
                value={Operation['+']}
                clickFn={operationButtonClickFn}
                displayClasses={[styles.button]}
            />
            <EqualButton
                clickFn={equalButtonClickFn}
                displayClasses={[styles.button, styles.equalButton]}
            />
        </>
    );
};

export default ButtonGroup;
