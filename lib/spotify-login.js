const SpotifyLogin = (clientId, redirect_uri) => {

   

    const CLIENT_ID = clientId
    const ENCODED_REDIRECT_URI = encodeURIComponent(redirect_uri)
    const RESPONSE_TYPE = "response_type=token"
    const SCOPES = encodeURIComponent("user-top-read user-read-currently-playing user-read-email")
    const SPOTIFY_LOGIN_URL = "https://accounts.spotify.com/authorize?"

     return ( 
        window.location = `${SPOTIFY_LOGIN_URL}${RESPONSE_TYPE}&client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${ENCODED_REDIRECT_URI}&show_dialog=true`
     )
    
}
 
export default SpotifyLogin;