const SpotifyLogin = (clientId) => {

    const CLIENT_ID = clientId
    const REDIRECT_URI = encodeURIComponent("http://localhost:3000/totp")
    const RESPONSE_TYPE = "response_type=token"
    const SCOPES = encodeURIComponent("user-top-read user-read-currently-playing")
    const SPOTIFY_LOGIN_URL = "https://accounts.spotify.com/authorize?"

     return ( 
        window.location = `${SPOTIFY_LOGIN_URL}${RESPONSE_TYPE}&client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}&show_dialog=true`
     )
    
}
 
export default SpotifyLogin;