import Link from 'next/link';
import styles from '@/components/Buttons/OtherButton/OtherButton.module.css';

export default function OtherButton({
    type = 'none',
    quiz = 'none',
    hrefBack = '#',
    hrefNext = '#',
    onNext,
    onBack,
    disabled
}) {
    return (
        <div className={styles.container}>
            {type === 'begin' ? (
                <div className={styles.buttons}>
                    <Link href={hrefBack}>
                        <button className={styles.button}>Back</button>
                    </Link>
                    <Link href={hrefNext}>
                        <button className={styles.button}>{quiz}</button>
                    </Link>
                </div>
            ) : type === 'quiz' ? (
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={onBack}>
                        Back</button>
                    <button className={styles.button} onClick={onNext} disabled={disabled}>
                        Next
                    </button>
                </div>
            ) : null}
        </div>
    );
}
