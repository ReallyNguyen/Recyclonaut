import styles from '@/styles/Error.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Error({ statusCode }) {
    const router = useRouter()
    return (
        <>
            {
                statusCode ?
                    <div className={styles.container}>
                        <h1 className={styles.header}>{statusCode} ERROR</h1>
                        <h3 className={styles.subheader}>An error ${statusCode} occured on server</h3>
                        <button className={styles.button} onClick={() => router.push('/')}>
                            GO BACK
                        </button>
                        <Image className={styles.astronaut} src={'/story/b&w.png'} width={500} height={600}/>
                    </div>
                    :   <div className={styles.container}>
                            <h1 className={styles.header}>{statusCode} ERROR</h1>
                            <h3 className={styles.subheader}>An error occured on client</h3>
                            <button className={styles.button} onClick={() => router.push('/')}>
                                GO BACK
                            </button>
                            <Image className={styles.astronaut} src={'/story/b&w.png'} width={500} height={600}/>
                        </div>
            }
        </>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res  ? res.statusCode
                            : err   ?
                                    err.statusCode
                                    : 404
    return {statusCode}
}

export default Error;
