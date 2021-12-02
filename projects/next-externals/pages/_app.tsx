import Script from 'next/script'
import type {AppProps} from 'next/app'
import load from 'helpers/cdn'
const cdn = load(process.env.NEXT_PUBLIC_ENV)
function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      {Object.keys(cdn).map((k: string) => (
        <Script key={k} src={cdn[k]} strategy="beforeInteractive" />
      ))}
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
