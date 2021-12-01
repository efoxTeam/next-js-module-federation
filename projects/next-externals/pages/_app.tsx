import Script from 'next/script'
import type {AppProps} from 'next/app'
import load from 'helpers/cdn'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Script src={load(process.env.NEXT_PUBLIC_ENV)['react']} strategy="beforeInteractive" />
      <Script src={load(process.env.NEXT_PUBLIC_ENV)['react-dom']} strategy="beforeInteractive" />
      <Script src={load(process.env.NEXT_PUBLIC_ENV)['mobx']} strategy="beforeInteractive" />
      <Script src={load(process.env.NEXT_PUBLIC_ENV)['mobx-react-lite']} strategy="beforeInteractive" />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
