import { useState } from 'react';
import styles from '@/components/Buttons/QuizButton/Buttons.module.css';

export default function Buttons({
    option = 'none',
    buttons = '0',
    updateScore = () => { }, //a default empty function is provided for the property
    disableButtons = false // prop to disable buttons
}) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = (event) => {
        if (disableButtons) {
            return; // do nothing if buttons are disabled
        }

        const currentButton = event.currentTarget;
        const buttons = document.querySelectorAll(`.${styles.buttons} button`); //selects all the buttons within an HTML element that has a class name that matches the buttons
        buttons.forEach((button) => {
            if (button === currentButton) {
                button.classList.toggle(styles.active); //adds the styles.active class to the button's classList if it is not present, and removes it if it is present. This toggles the active state of the button.
                updateScore(option.point);
            } else {
                button.classList.remove(styles.active); //removes the CSS class active from the classList property of the button element, which is used to toggle the active state of the button
            }
        });
    };

    return (
        <div className={styles.buttons}>
            {buttons === '3' ? (
                <button
                    style={{ height: '5rem' }}
                    className={`${isActive ? styles.active : ''}`} //If isActive is true, then it adds the styles.active class to the button. If isActive is false, then it adds an empty string to the class name.
                    onClick={handleClick}
                    disabled={disableButtons}
                >
                    {option.option}
                </button>
            ) : buttons === '2' ? (
                <button
                    style={{ height: '8rem' }}
                    className={`${isActive ? styles.active : ''}`}
                    onClick={handleClick}
                    disabled={disableButtons}
                >
                    {option.option}
                </button>
            ) : (
                <button
                    className={`${isActive ? styles.active : ''}`}
                    onClick={handleClick}
                    disabled={disableButtons}
                >
                    {option.option}
                </button>
            )}
        </div>
    );
}