import styles from "../styles/components/Title.module.scss"

const Title = () => {
    return ( 
        <div className={styles.titleContainer}>
             <div className={styles.title}>
                <h2>My Spotify Chart!</h2>
            </div>
            <div className={styles.guitarContainer}>
                <div className={styles.guitar}></div>
            </div>
        </div>
    );
}
 
export default Title;
