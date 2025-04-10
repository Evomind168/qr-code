import { SCAN_DATA } from '../../constants.js';
import { useEffect, useState } from 'react';
import styles from './ScanHistory.module.css';

export const ScanHistory = () => {
    const [scanHistory, setScanHistory] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        setScanHistory(data);
    }, []);

    return (
        <div className={styles['scan-history-container']}>
            <h1 className={styles['scan-history-title']}>Історія сканування</h1>
            {scanHistory.length > 0 ? (
                <ul className={styles['scan-history-list']}>
                    {scanHistory.map((item, index) => (
                        <li key={index} className={styles['scan-history-item']}>
                            {item}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles['scan-history-empty']}>Немає жодного збереженого сканування.</p>
            )}
        </div>
    );
};
