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
                page === "quiz" ? <Image src={Recyclonaut} width={20} height={20} style={{ maxWidth: "100%" }} /> :
                    page === "intro" ? <Image src={Recyclonaut} width={100} height={80} /> :
                        page === "loading" ? <Image src={Recyclonaut} width={200} height={180} /> :
                            <Image src={Recyclonaut} width={100} height={80} />
            }
        </div>
    );

}
