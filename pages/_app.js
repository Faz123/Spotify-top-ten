import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
 <>
 <style jsx global>{`
        html {
          font-family: Modeseven;
        }
      `}</style>
 <Component {...pageProps} />
 </> 
 )
}
