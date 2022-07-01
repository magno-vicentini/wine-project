import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ProductProvider } from '../context/provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </>
  )
}

export default MyApp
