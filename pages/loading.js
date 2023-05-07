import { useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "@/components/Logo";
import Image from "next/image";
import styles from '@/styles/Loading.module.css'

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.logo}>
          <Logo
            page="loading"
          />
        </div>
        <div className={styles.orbit}>
          <Image className={styles.rocket} src={'/icons/rocket.png'} width={40} height={50} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.heading}>RECYCLONAUT</h1>
          <h4 className={styles.credits}>Created by Jordan & Mariela</h4>
        </div>
      </div>
    </>
  );
};
