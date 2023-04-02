import styles from '@/components/Buttons/Buttons.module.css'

export default function Buttons({
    option = "none",
    buttons = "0"
}) {
    return (
        <div className={styles.buttons}>
            {
                buttons === "3" ? (
                    <button style={{ height: '5rem' }}>{option}</button>
                ) : buttons === "2" ? (
                    <button style={{ height: '8rem' }}>{option}</button>
                ) : (
                    <button>{option}</button>
                )
            }
        </div>
    )
}
