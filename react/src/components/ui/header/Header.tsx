import classes from './Header.module.css';

import { FC } from 'react';

interface HeaderProps {
    title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
    return (
        <header className={classes.header}>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;
