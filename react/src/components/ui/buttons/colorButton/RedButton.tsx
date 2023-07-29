import classes from './Button.module.css';

import { FC, MouseEventHandler } from 'react';

interface RedButtonProps {
    title: string;
    onClickFn: MouseEventHandler<HTMLButtonElement>;
    size?: 'md' | 'lg';
}

const RedButton: FC<RedButtonProps> = ({ title, onClickFn, size }) => {
    const sizeClass = size === 'lg' ? classes.lg : classes.md;

    const className = `${classes.button} ${classes.redButton} ${sizeClass}`;

    return (
        <button onClick={onClickFn} className={className}>
            {title}
        </button>
    );
};

export default RedButton;
