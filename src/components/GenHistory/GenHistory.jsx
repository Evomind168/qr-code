import { GENERATE_DATA } from '../../constants.js';
import { useEffect, useState } from 'react';
import styles from './GenHistory.module.css';

export const GenHistory = () => {
    const [genHistory, setGenHistory] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        setGenHistory(data);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Історія генерації</h1>
            <ul className={styles.list}>
                {genHistory.map((item, index) => (
                    <li key={index} className={styles.listItem}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
