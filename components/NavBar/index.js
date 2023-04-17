import styles from './NavBar.module.css'
import Logo from '../Logo'
import MenuBurger from '../MenuBurger'
import Link from 'next/link'

export default function NavBar({
    page = 'none'
}) {

    return (
        <>
            <div>
                {page === 'quiz' ? (
                    <div className={styles.navbar}>
                        <Link href={"/"}>
                            <Logo />
                        </Link>
                        <MenuBurger />
                    </div>
                ) : page === 'result' ? (
                    <div className={styles.navbar}>
                        <Link href={"/"}>
                            <Logo />
                        </Link>
                        <MenuBurger />
                    </div>
                ) : null}

            </div>
        </>
    )
}