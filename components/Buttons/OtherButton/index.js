import Link from 'next/link';
import styles from '@/components/Buttons/OtherButton/OtherButton.module.css'

export default function OtherButton({
    type = 'none',
    back = 'none',
    next = 'none',
    quiz = 'none',
    submit = 'none',
    hrefBack = '#',
    hrefNext = '#'
}) {
    return (
        <div className={styles.container}>
            {type === 'begin' ? (
                <div className={styles.buttons}>
                    <Link href={hrefBack}>
                        <button className={styles.button}>{back}</button>
                    </Link>
                    <Link href={hrefNext}>
                        <button className={styles.button}>{quiz}</button>
                    </Link>
                </div>
            ) : type === 'quiz' ? (
                <div className={styles.buttons}>
                    <Link href={hrefBack}>
                        <button className={styles.button}>{back}</button>
                    </Link>
                    <Link href={hrefNext}>
                        <button className={styles.button}>{next}</button>
                    </Link>
                </div>
            ) : type === 'submit' ? (
                <div className={styles.buttons}>
                    <Link href={hrefBack}>
                        <button className={styles.button}>{back}</button>
                    </Link>
                    <Link href={hrefNext}>
                        <button className={styles.button}>{submit}</button>
                    </Link>
                </div>
            ) : null}
        </div>
    );
}