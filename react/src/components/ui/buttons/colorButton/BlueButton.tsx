import classes from './Button.module.css';

import { FC, MouseEventHandler } from 'react';

interface BlueButtonProps {
    title: string;
    onClickFn: MouseEventHandler<HTMLButtonElement>;
    size?: 'md' | 'lg';
}

const BlueButton: FC<BlueButtonProps> = ({ title, onClickFn, size }) => {
    const sizeClass = size === 'lg' ? classes.lg : classes.md;

    const className = `${classes.button} ${classes.blueButton} ${sizeClass}`;

    return (
        <button onClick={onClickFn} className={className}>
            {title}
        </button>
    );
};

export default BlueButton;
