import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/QuizIntro.module.css'
import { useRouter } from 'next/router'
import Logo from '@/components/Logo'
import NavBar from '@/components/NavBar'


export default function Quiz() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Recyclonaut</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <main className={styles.main}>
                <div className={styles.container}>
                    <NavBar />
                    <div className={styles.intro}>
                        <p>Welcome aboard! As we embark on this journey together,
                            I'll serve as your mentor and instructor on how we can make a positive impact on our planet
                            and shape a better future. <br /><br />
                            We have created a brief quiz to help us assign you to a team that aligns with your answers.
                            This will enable us to provide you with a set of tasks that can be easily integrated into your daily routine. <br /><br />
                            Remember, small changes can lead to massive results.
                            Let's work together to achieve remarkable outcomes!</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={() => router.push('/')}>
                            Back
                        </button>
                        <button className={styles.button} onClick={() => router.push('./quiz/quiz')}>
                            Quiz
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}
