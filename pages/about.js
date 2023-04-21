import styles from '@/styles/About.module.css'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function About() {

    var jordan = process.env.NEXT_PUBLIC_NAME_JORDAN;
    var mari = process.env.NEXT_PUBLIC_NAME_MARIELA;
    var front = process.env.NEXT_PUBLIC_ROLE_FRONT;
    var ui = process.env.NEXT_PUBLIC_ROLE_UI;
    var introJordan = process.env.NEXT_PUBLIC_INTRODUCTION_JORDAN;
    var introMari = process.env.NEXT_PUBLIC_INTRODUCTION_MARIELA;

    return (
        <>
            <div className={styles.container}>
                <NavBar page='quiz' />
                <div className={styles.card}>
                    <Image src="/about/Jordan.svg" alt="Jordan" className={styles.card__image} width={100} height={100} />
                    <div className={styles.card__body}>
                        <div className={styles.card__name}>
                            <h2 className={styles.card__title}>{jordan}</h2>
                            <h4 className={styles.card__subtitle}>{front}</h4>
                        </div>
                        <p className={styles.card__description}>
                            {introJordan}
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <Image src="/about/Mari.svg" alt="Mari" className={styles.card__image} width={100} height={100} />
                    <div className={styles.card__body}>
                        <div className={styles.card__name}>
                            <h2 className={styles.card__title}>{mari}</h2>
                            <h5 className={styles.card__subtitle}>{ui}</h5>
                            <h5 className={styles.card__subtitle}>{front}</h5>
                        </div>
                        <p className={styles.card__description}>
                            {introMari}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
