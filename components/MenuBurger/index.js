import styles from './MenuBurger.module.css'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function MenuBurger() {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const closeMenu = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(false);
            }
        };
        document.addEventListener('mousedown', closeMenu);
        return () => {
            document.removeEventListener('mousedown', closeMenu);
        };
    }, [menuRef]);

    return (
        <>
            <div className={styles.menu_burger} onClick={() => setMenu(true)}>
                <div className={styles.burger_line}></div>
                <div className={styles.burger_line}></div>
                <div className={styles.burger_line}></div>
            </div>
            {
                menu === true ?
                    <div ref={menuRef} className={styles.openMenu}>
                        <Link className={styles.link} href="/">Home</Link>
                        <Link className={styles.link} href="/story">Story</Link>
                        <Link className={styles.link} href="/quizintro">Assessment</Link>
                        <Link className={styles.link} href="/resources">Resources</Link>
                        <Link className={styles.link} href="/about">About</Link>
                    </div> :
                    <></>
            }
        </>
    )
}