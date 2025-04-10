import { SCAN_DATA } from '../../constants.js';
import { useEffect, useState } from 'react';
import './ScanHistory.css';

export const ScanHistory = () => {
    const [scanHistory, setScanHistory] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        setScanHistory(data);
    }, []);

    return (
        <div>
            <h1>Історія сканування</h1>
            <ul>
                {scanHistory.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
