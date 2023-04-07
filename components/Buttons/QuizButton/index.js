import { useState } from 'react';
import styles from '@/components/Buttons/QuizButton/Buttons.module.css';

export default function Buttons({
    option = 'none',
    buttons = '0',
    updateScore = () => { },
}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event) => {
        const currentButton = event.currentTarget;
        const buttons = document.querySelectorAll(`.${styles.buttons} button`);
        buttons.forEach((button) => {
            if (button === currentButton) {
                button.classList.toggle(styles.active);
                updateScore(option.point); // call the updateScore function and pass the point value of the option
            } else {
                button.classList.remove(styles.active);
            }
        });
    };

    return (
        <div className={styles.buttons}>
            {buttons === '3' ? (
                <button
                    style={{ height: '5rem' }}
                    className={`${isActive ? styles.active : ''}`}
                    onClick={handleClick}
                >
                    {option.option}
                </button>
            ) : buttons === '2' ? (
                <button
                    style={{ height: '8rem' }}
                    className={`${isActive ? styles.active : ''}`}
                    onClick={handleClick}
                >
                    {option.option}
                </button>
            ) : (
                <button
                    className={`${isActive ? styles.active : ''}`}
                    onClick={handleClick}
                >
                    {option.option}
                </button>
            )}
        </div>
    );
}
