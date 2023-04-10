import styles from '../styles/components/Footer.module.scss'
const Footer = () => {
    return ( 
        <footer>
            <div className={styles.links}>
                <div><span>Music index 620</span><span>Tour dates 623</span></div>
            </div>
            <div className={styles.banner}>
                <h3>WHAT&apos;S ON TV p410</h3>
            </div>
            <div className={styles.shortCuts}>
                <ul>
                    <li>Tour Dates</li>
                    <li>Music News</li>
                    <li>Reviews</li>
                    <li>Club 440</li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;