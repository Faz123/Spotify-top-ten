import { useEffect, useState } from "react";

const Tracks = ({token}) => {
    const [data, setData] =  useState(null)
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
            fetch('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term', {
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
            <ol>
                {data.items && data.items.map((item, index) => {
                    return <li key={index}>{item.name} - {item.artists[0].name}</li>
                })}
            </ol>
        </div>
     )
}
 
export default Tracks;