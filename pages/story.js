import styles from '@/styles/Story.module.css'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import Link from 'next/link'

export default function Story() {
    return (
        <>
            <div className={styles.container}>
                <NavBar page='quiz' />
                <div className={styles.header}>
                    <h1 className={styles.wordmark}>RECYCLONAUT</h1>
                    <h3 className={styles.tagline}>Launching to a sustainable future!</h3>
                </div>
                <div className={styles.story}>
                    <p className={styles.text}>
                        For years, humanity had been careless with the planet they called home, 
                        treating it as if it were an infinite resource that could be abused without consequence.
                    </p>
                    <p className={styles.text}>
                        The effects of climate change had become impossible to ignore, with natural disasters 
                        and environmental degradation becoming more and more common.
                    </p>
                    <Image className={styles.earth} src={'/story/earth.png'} width={200} height={200}/>
                    <p className={styles.text}>
                        As the majority of humans could not adjust to life in outer space, 
                        our species had reached the point of extinction, except for one lone soldier.   
                    </p>
                    <Image src={'/story/lone.svg'} width={340} height={300}/>
                    <p className={styles.text}>
                        Recyclo, the space-time travelling astronaut, went on a mission to explore a 
                        distant planet in a far-off galaxy.   
                    </p>
                    <p className={styles.text}>
                        As he journeyed through the vast expanse of space, he came across a civilization 
                        that had achieved a level of technological advancement far beyond that of humanity.
                    </p>
                    <Image src={'/story/discovery.png'} width={340} height={340}/>
                    <p className={styles.text}>
                        The astronaut met with the planet’s inhabitants and learned from their sustainable 
                        living practices, in order to preserve the earth.
                    </p>
                    <Image src={'/story/closeup.svg'} width={300} height={300}/>
                    <h3 className={styles.save}>"I can save our planet."</h3>
                    <div className={styles.join}>
                        <h4 className={styles.heading}>Would you like to join the journey?</h4>
                        <div className={styles.btns}>
                            <Link href={'/quizintro'}><div className={styles.btn}>YES</div></Link>
                            <Link href={'/error'}><div className={styles.btn}>NO</div></Link>
                        </div>
                    </div>
                </div>
                <Image className={styles.journey} src={'/story/journey.png'} width={414} height={250}/>
            </div>
        </>
    )
}