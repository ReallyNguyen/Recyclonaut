import styles from './NavBar.module.css'
import Logo from '../Logo'
import MenuBurger from '../MenuBurger'

export default function NavBar({
    page = 'none'
}) {

    return (
        <>
            <div>
                {page === 'quiz' ? (
                    <div className={styles.navbar}>
                        <Logo page='quiz' />
                        <MenuBurger />
                    </div>
                ) : page === 'result' ? (
                    <div className={styles.navbar}>
                        <Logo />
                        <MenuBurger />
                    </div>
                ) : null}
            </div>
        </>
    )
}