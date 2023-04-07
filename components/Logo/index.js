import Head from 'next/head'
import Recyclonaut from "@/public/logo.svg"
import styles from '@/components/Logo/Logo.module.css'
import Image from 'next/image'

export default function Logo({
    page = "none"
}) {

    return (
        <div className={styles.logoContainer}>
            {
<<<<<<< HEAD
                page === "quiz" ? <Image src={Recyclonaut} width={20} height={20} style={{ maxWidth: "100%" }} /> :
                    page === "intro" ? <Image src={Recyclonaut} width={100} height={80} /> :
                        null
=======
                page === "quiz" ? <Image src={Recyclonaut} width={20} height={20} /> :
                page === "intro" ? <Image src={Recyclonaut} width={200} height={50} /> :
                <Image src={Recyclonaut} width={100} height={80} />
>>>>>>> 4868de6f74bb72a81e849b8daf155acdd9f2ee53
            }
        </div>
    );

}
