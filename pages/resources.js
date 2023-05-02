import styles from '@/styles/Resources.module.css'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/NavBar'

export default function Resources() {
    const handleFashion = () => {
        window.open('https://www.sustainablejungle.com/sustainable-living/ethical-sustainable-fashion/ ', '_blank');
    };
    const handleShopping = () => {
        window.open('https://www.thegoodtrade.com/ ', '_blank');
    };
    const handleProduct = () => {
        window.open('https://www.self.com/gallery/reusable-products  ', '_blank');
    };
    const handleRecycling = () => {
        window.open('https://karacarrero.com/learning-about-recycling/#:~:text=Recycling%20is%20taking%20waste%20or,part%20of%20your%20cereal%20box.  ', '_blank');
    };


    return (
        <>
            <div className={styles.main}>
                <NavBar
                    page='quiz'
                />

                <h1 className={styles.header}>Resources</h1>

                <div className={styles.fashion}>
                    <Image src='resource/fashion.svg' width={142} height={142} />
                    <h2>Sustainable Fashion</h2>
                    <button onClick={handleFashion}>
                        Learn More
                    </button>
                </div>

                <div className={styles.shopping}>
                    <Image src='resource/shop.svg' width={142} height={142} />
                    <h2>Sustainable Fashion</h2>
                    <button onClick={handleShopping}>
                        Learn More
                    </button>
                </div>

                <div className={styles.product}>
                    <Image src='resource/product.svg' width={142} height={142} />
                    <h2>Sustainable Fashion</h2>
                    <button onClick={handleProduct}>
                        Learn More
                    </button>
                </div>

                <div className={styles.recycling}>
                    <Image src='resource/recycling.svg' width={142} height={142} />
                    <h2>Sustainable Fashion</h2>
                    <button onClick={handleRecycling}>
                        Learn More
                    </button>
                </div>

            </div>

        </>
    )
}