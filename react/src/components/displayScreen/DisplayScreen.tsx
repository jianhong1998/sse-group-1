import styles from './DisplayScreen.module.css';

import { FC } from 'react';

interface DisplayScreenProps {
    value: string;
}

const DisplayScreen: FC<DisplayScreenProps> = ({ value }) => {
    return <div className={styles.screen}>{value}</div>;
};

export default DisplayScreen;
