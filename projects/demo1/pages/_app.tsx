import Head from 'next/head'

function MyApp({Component, pageProps}: any) {
  return (
    <>
      <Head>
        {/* <script src="http://localhost:3002/_next/static/runtime/emp.js" /> */}
        <script src="http://localhost:8000/emp.js" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
