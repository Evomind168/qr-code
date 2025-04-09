import { useState } from 'react';
import { QRCodeSVG } from "qrcode.react";
import s from './QrGen.module.css';
import {GENERATE_DATA} from "../../constants.js";

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        const prevData =JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    return (
        <div className={s.container}>
            <input
                type="text"
                value={value}
                onChange={onChangeHandler}
                className={s.input}
                placeholder="Введіть текст"
            />

            <button type='submit' onClick={onClickHandler} className={s.button}>
                Згенерувати
            </button>


            {result !== '' && (
                <div className={s.QrWrapper}>
                    <QRCodeSVG value={result} className={s.qrCode} />
                </div>
            )}
        </div>
    );
};