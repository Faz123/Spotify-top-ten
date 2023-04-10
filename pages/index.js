import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import spotifyLogin from '../lib/spotify-login'

export default function Home({appID, redirect_uri}) {
  return (
    <>
      <Head>
        <title>Spotify Test App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
        <h1>Spotify API Test</h1>
        <br />
        <h2>Display my top played tracks from the last 6 months</h2>
        <br />
          <button type="button" onClick={() => spotifyLogin(appID, redirect_uri)}>Login</button>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
     const clientId = process.env.CLIENT_ID
     const redirect_uri = process.env.REDIRECT_URL

     return {
      props: {
        appID : clientId,
        redirect_uri : redirect_uri
      } 
     }
}