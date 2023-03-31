import Head from 'next/head'
import Recyclonaut from "@/public/logo.svg"
import styles from '@/components/Logo/Logo.module.css'
import Image from 'next/image'

export default function Logo() {

    return (
        <>
            <Image src={Recyclonaut} />
        </>
    )
}
