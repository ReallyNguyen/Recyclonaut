import styles from '@/styles/Error.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Error() {
    const router = useRouter()
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.header}>404 ERROR</h1>
                <h3 className={styles.subheader}>Lost in space...</h3>
                <button className={styles.button} onClick={() => router.push('./story')}>
                    GO BACK
                </button>
                <Image className={styles.astronaut} src={'/story/b&w.png'} width={700} height={700}/>
            </div>
        </>
    )
}