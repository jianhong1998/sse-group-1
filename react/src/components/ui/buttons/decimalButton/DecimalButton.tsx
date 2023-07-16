import styles from '../numberButton/NumberButton.module.css';

import { FC } from 'react';

interface DecimalButonProps {
    displayClasses?: string[];
    clickFn: () => void;
}

const DecimalButton: FC<DecimalButonProps> = ({ displayClasses, clickFn }) => {
    const value = '.';

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

    // const onClickHandler: MouseEventHandler = () => {
    //     clickFn();
    // };

    return (
        <button className={getClasses()} onClick={clickFn}>
            {value}
        </button>
    );
};

export default DecimalButton;
