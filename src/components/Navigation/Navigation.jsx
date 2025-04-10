import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <Link className={styles.link} to="/">Головна</Link>
            <Link className={styles.link} to="/generator">Генератор QR-коду</Link>
            <Link className={styles.link} to="/scan">Сканер QR-коду</Link>
            <Link className={styles.link} to="/genHistory">Історія генерації</Link>
            {/*<Link className={styles.link} to="/scanHistory">Історія сканування</Link>*/}
        </nav>
    );
};