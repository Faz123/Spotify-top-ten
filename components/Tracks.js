import { useEffect, useState } from "react";
import styles from "../styles/components/Tracks.module.scss"

const Tracks = ({token}) => {
    const [data, setData] =  useState(null)
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
            fetch('https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=medium_term', {
            headers :{
                'Authorization' : `Bearer ${token}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
            console.log({data});
        })
        }
    , [token])
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No Spotify data.</p>
    return ( 
        <div className="results">
                {data.items && data.items.map((item, index) => {
                    return <p className={styles.track} key={index}>{index + 1} <span className={styles.separator}></span> <span className={styles.trackName}>{item.name}</span> <span className={styles.artistName}>{item.artists[0].name}</span></p>
                })}
        </div>
     )
}
 
export default Tracks;