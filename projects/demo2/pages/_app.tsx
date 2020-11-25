import Head from 'next/head'

function MyApp({Component, pageProps}: any) {
  return (
    <>
      <Head>
        <script src="http://localhost:3001/_next/static/runtime/emp.js" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
