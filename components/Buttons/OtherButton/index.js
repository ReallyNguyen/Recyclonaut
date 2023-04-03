import styles from '@/components/Buttons/OtherButton/OtherButton.module.css';

export default function OtherButton({
    type = 'none',
    back = 'none',
    next = 'none',
    quiz = 'none',
    submit = 'none'
}) {
    return (
        <div className={styles.container}>
            {type === 'begin' ? (
                <div className={styles.buttons}>
                    <button>{back}</button>
                    <button>{quiz}</button>
                </div>
            ) : type === 'quiz' ? (
                <div className={styles.buttons}>
                    <button>{back}</button>
                    <button>{next}</button>
                </div>
            ) : type === 'submit' ? (
                <div className={styles.buttons}>
                    <button>{back}</button>
                    <button>{submit}</button>
                </div>
            ) : null}
        </div>
    );
}
