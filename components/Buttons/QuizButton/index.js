import { useState } from 'react';
import styles from '@/components/Buttons/QuizButton/Buttons.module.css';

export default function Buttons({
    option = 'none',
    buttons = '0',
}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(prevIsActive => !prevIsActive);
    };

    return (
        <div className={styles.buttons}>
            {buttons === '3' ? (
                <button
                    style={{ height: '5rem' }}
                    className={`${isActive ? styles.active : ''}`}
                    onClick={handleClick}
                >
                    {option}
                </button>
            ) : buttons === '2' ? (
                <button
                    style={{ height: '8rem' }}
                    className={`${isActive ? styles.active : ''}`}
                    onClick={handleClick}
                >
                    {option}
                </button>
            ) : (
                <button
                    className={`${isActive ? styles.active : ''}`}
                    onClick={handleClick}
                >
                    {option}
                </button>
            )}
        </div>
    );
}
