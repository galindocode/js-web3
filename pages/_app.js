import '../styles/globals.css'
import {getLibriary} from '../config/web3/index'
import { Web3ReactProvider } from '@web3-react/core'



function MyApp({ Component, pageProps }) {
  return(
    <Web3ReactProvider getLibrary={getLibriary}>
    <Component {...pageProps} />
  </Web3ReactProvider>
  )
}

export default MyApp
