import styles from './NavBar.module.css'
import Logo from '../Logo'
import MenuBurger from '../MenuBurger'

export default function NavBar() {
    
    return (
        <>
            <div className={styles.navbar}>
                <Logo />
                <MenuBurger />
            </div>
        </>
    )
}
