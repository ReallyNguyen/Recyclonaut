import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
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
        <Image className={styles.bgimg} src={'/backgrounds/homebg.jpg'} width={414} height={896}/>
        <div className={styles.header}>
          <h1 className={styles.wordmark}>RECYCLONAUT</h1>
          <h3 className={styles.tagline}>Launching to a sustainable future!</h3>
        </div>
        <div className={styles.btns}>
          <button className={styles.button} onClick={() => router.push('./story')}>
            STORY
          </button>
          <button className={styles.button} onClick={() => router.push('./quizintro')}>
            QUIZ
          </button>
          <button className={styles.button} onClick={() => router.push('./tutorial')}>
            TUTORIAL
          </button>
          <button className={styles.button} onClick={() => router.push('./about')}>
            ABOUT
          </button>
        </div>
      </main>
    </>
  )
}
