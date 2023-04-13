import styles from './NavBar.module.css'
import Logo from '../Logo'
import MenuBurger from '../MenuBurger'
import Link from 'next/link'

export default function NavBar() {
    
    return (
        <>
            <div className={styles.navbar}>
                <Link href={"/"}>
                    <Logo />
                </Link>
                <MenuBurger />
            </div>
        </>
    )
}
