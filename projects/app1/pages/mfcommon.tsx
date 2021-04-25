import {requireFromString} from 'helper/tool'
function MFCommon() {
  return (
    <>
      <h1>Module Federation COMMONJS-MODULE!</h1>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const url = 'http://localhost:3003/emp.js'
  const code: string = await fetch(url).then(res => res.text())
  const self = null
  const cb = requireFromString(code)
  console.log('cb', cb)
  return {
    props: {code}, // will be passed to the page component as props
  }
}

export default MFCommon
