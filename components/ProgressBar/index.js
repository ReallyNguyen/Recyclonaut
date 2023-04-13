import { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({ questionIndex, totalQuestions }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const percentage = ((questionIndex - 1) / totalQuestions) * 100;
        setWidth(`${percentage}%`);
    }, [questionIndex, totalQuestions]);

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.percent}>{width}</h1>
                <div className={styles.progress}>
                    <div className={styles.progress_bar} style={{ width }}></div>
                </div>
            </div>
        </>
    );
}
