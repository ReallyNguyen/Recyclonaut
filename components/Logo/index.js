import Recyclonaut from "@/public/logo.svg"
import styles from '@/components/Logo/Logo.module.css'
import Image from 'next/image'
import { useState } from 'react'
import Link from "next/link"

export default function Logo({
    page = "none"
}) {

    const [pop, setPop] = useState(false);

    return (
        <>
            <div className={styles.logoContainer} onClick={() => setPop(true)}>
                {
                    page === "quiz" ? <Image src={Recyclonaut} width={60} height={60} /> :
                    page === "loading" ? <Image src={Recyclonaut} width={200} height={180} /> :
                    <Image src={Recyclonaut} width={100} height={80} />
                }
            </div>
            {
                pop === true ?
                    <div className={styles.container}>
                        <div className={styles.overlay}>
                            <h4 className={styles.heading}>Are you sure you want to exit?</h4>
                            <div className={styles.btns}>
                                <Link href={'/'}><div className={styles.btn}>YES</div></Link>
                                <div className={styles.btn} onClick={() => setPop(false)}>NO</div>
                            </div>
                        </div>
                    </div>:
                <></>
            }
        </>
    );

}
