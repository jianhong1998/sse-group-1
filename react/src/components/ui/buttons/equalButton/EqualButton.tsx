import styles from './EqualButton.module.css';

import { FC } from 'react';

interface EqualButonProps {
    displayClasses?: string[];
    clickFn: () => void;
}

const EqualButton: FC<EqualButonProps> = ({ displayClasses, clickFn }) => {
    const value = '=';

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

    return (
        <button className={getClasses()} onClick={clickFn}>
            {value}
        </button>
    );
};

export default EqualButton;
