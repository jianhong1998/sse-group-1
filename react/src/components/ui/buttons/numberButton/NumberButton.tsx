import styles from './NumberButton.module.css';

import { FC, MouseEventHandler } from 'react';

interface NumberButonProps {
    displayClasses?: string[];
    value: number;
    clickFn: (number: number) => void;
}

const NumberButton: FC<NumberButonProps> = ({
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

export default NumberButton;
