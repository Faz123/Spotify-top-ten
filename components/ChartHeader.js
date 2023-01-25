import styles from "../styles/components/ChartHeader.module.scss"
import { useState, useEffect } from "react";

const ChartHeader = () => {
        const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        const [date, setDate] = useState(new Date())
    
        useEffect(() => {
            const refreshClock = () => {
                setDate(new Date())
            } 
            const timerId = setInterval(refreshClock, 1000)
            const cleanup = () => {
                clearInterval(timerId)
            }
            return cleanup
        }, [])
    return (  
        <header className={styles.header}>
            <div className={styles.page}><span>P622</span></div>
            <div className={styles.teletext}><span>Teletext</span></div>
            <div className="page-repeat"><span>622</span></div>
            <div className="date"><span>{month[date.getMonth()]}{date.getDate()}</span></div>
            <div className={styles.time}><span>{date.toLocaleTimeString("en-GB")}</span></div>
        </header>
    );
}
 
export default ChartHeader;