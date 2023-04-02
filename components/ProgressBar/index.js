import { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({ percentage = 0 }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(`${percentage}%`);
    }, [percentage]);

    return (
        <div className={styles.progress}>
            <div className={styles.progress_bar} style={{ width }}></div>
        </div>
    );
}
