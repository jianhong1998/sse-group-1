import styles from './Calculator.module.css';

import { FC, useState } from 'react';
import DisplayScreen from '../../components/displayScreen/DisplayScreen';
import ButtonGroup from '../../components/buttonGroup/ButtonGroup';

const CalculatorPage: FC = () => {
    const [result, setResult] = useState<string>('0');

    return (
        <div className={styles.container}>
            <DisplayScreen value={result} />
            <ButtonGroup displayResultFn={setResult} />
        </div>
    );
};

export default CalculatorPage;
