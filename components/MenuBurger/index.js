import styles from './MenuBurger.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function MenuBurger() {
    const [menu, setMenu] = useState(false);
    
    return (
        <>
            <div className={styles.menu_burger} onClick={() => setMenu(true)}>
                <div className={styles.burger_line}></div>
                <div className={styles.burger_line}></div>
                <div className={styles.burger_line}></div>
            </div>
            {
                menu === true ?
                    <div className={styles.openMenu}>
                        <Link className={styles.link} href="/">Home</Link>
                        <Link className={styles.link} href="/quizintro">Quiz</Link>
                        <Link className={styles.link} href="/story">Story</Link>
                        <Link className={styles.link} href="/about">About</Link>
                        <Link className={styles.link} href="/tutorial">Tutorial</Link>
                    </div>:
                <></>
            }
        </>
    )
}
