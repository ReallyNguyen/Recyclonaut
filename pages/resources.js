import styles from '@/styles/Resources.module.css'
import Image from 'next/image'
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
                <div className={styles.container}>
                    <div className={styles.fashion}>
                        <Image src='resource/fashion.svg' width={142} height={142} />
                        <h2>Sustainable Fashion</h2>
                        <p>
                            Sustainable fashion reduces the fashion industry's negative impact on the environment and supports ethical manufacturing. 
                            <br/><br/>It values quality, eco-friendly materials, and fair labor practices to reduce waste and environmental damage.
                            <br/><br/>Join us in making a positive impact on the planet and the fashion industry!
                            <br/><br/>Click "Learn More" above to explore our eco-friendly clothing options and sustainable fashion.
                        </p>
                        <button onClick={handleFashion}>
                            Learn More
                        </button>
                    </div>

                    <div className={styles.shopping}>
                        <Image src='resource/shop.svg' width={142} height={142} />
                        <h2>Sustainable Shopping</h2>
                        <p>
                            Shopping sustainably considers the impact of a product on the environment and society. 
                            <br/><br/>We offer eco-friendly products made from sustainable materials with strict standards for social and environmental responsibility.
                            <br/><br/>Click "Learn More" to explore sustainable shopping options and make more conscious choices.
                        </p>
                        <button onClick={handleShopping}>
                            Learn More
                        </button>
                    </div>

                    <div className={styles.product}>
                        <Image src='resource/product.svg' width={142} height={142} />
                        <h2>Reusable Products</h2>
                        <p>
                            Sustainable shopping means making choices that reduce waste and support ethical practices. 
                            <br/><br/>Choose sustainable products to protect the environment and promote social responsibility.
                            <br/><br/>Click "Learn More" to explore our sustainable shopping options and make conscious choices.
                        </p>
                        <button onClick={handleProduct}>
                            Learn More
                        </button>
                    </div>

                    <div className={styles.recycling}>
                        <Image src='resource/recycling.svg' width={142} height={142} />
                        <h2>Recycling</h2>
                        <p>
                            Recycling is essential for sustainability as it converts waste into new products, conserving resources, saving energy, and reducing emissions.
                            <br/><br/>Click "Learn More" to join us in making a difference.
                        </p>
                        <button onClick={handleRecycling}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}