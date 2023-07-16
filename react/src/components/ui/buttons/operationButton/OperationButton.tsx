import Operation from '../../../../models/operation.enum';
import styles from '../numberButton/NumberButton.module.css';

import { FC, MouseEventHandler } from 'react';

interface OperationButonProps {
    displayClasses?: string[];
    value: Operation;
    clickFn: (operation: Operation) => void;
}

const OperationButton: FC<OperationButonProps> = ({
    value,
    displayClasses,
    clickFn,
}) => {
    const getClasses = () => {
        let className = '';

        if (typeof displayClasses !== 'undefined') {
            for (const name of displayClasses) {
                className += name + ' ';
            }
        }

        className += styles.button;

        return className;
    };

    const onClickHandler: MouseEventHandler = () => {
        clickFn(value);
    };

    return (
        <button className={getClasses()} onClick={onClickHandler}>
            {value}
        </button>
    );
};

export default OperationButton;
