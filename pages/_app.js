import '../styles/globals.css'
import { Inconsolata } from '@next/font/google'


const inconsolata = Inconsolata({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
 <>
 <style jsx global>{`
        html {
          font-family: ${inconsolata.style.fontFamily};
        }
      `}</style>
 <Component {...pageProps} />
 </> 
 )
}
