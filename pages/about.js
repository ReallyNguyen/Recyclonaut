import styles from '@/styles/About.module.css'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function About() {
    return (
        <>
            <div className={styles.container}>
                <NavBar page='quiz' />
                <div className={styles.card}>
                    <Image src="/about/Jordan.svg" alt="Jordan" className={styles.card__image} width={100} height={100} />
                    <div className={styles.card__body}>
                        <div className={styles.card__name}>
                            <h2 className={styles.card__title}>Jordan</h2>
                            <h4 className={styles.card__subtitle}>Front End Developer</h4>
                        </div>
                        <p className={styles.card__description}>
                            Hi there! I'm Jordan, a dynamic app developer and designer who loves collaborating with
                            others and has a knack for finding humor in every situation.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <Image src="/about/Mari.svg" alt="Mari" className={styles.card__image} width={100} height={100} />
                    <div className={styles.card__body}>
                        <div className={styles.card__name}>
                            <h2 className={styles.card__title}>Mariela</h2>
                            <h5 className={styles.card__subtitle}>UX/UI Designer</h5>
                            <h5 className={styles.card__subtitle}>Front End Developer</h5>
                        </div>
                        <p className={styles.card__description}>
                            Hey, I'm Mariela, a UX/UI designer and developer that has a passion for thinking creatively
                            and paying close attention to detail
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
