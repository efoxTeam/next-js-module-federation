import dynamic from 'next/dynamic'
import mfImport from '@efox/emp-mf-import'

const DynamicMF = dynamic(() =>
  mfImport({
    url: 'http://localhost:3003/emp.js',
    scope: 'staticHost',
    module: './home',
  }),
)
const Head = dynamic(import('components/dynamic/Head'))
const HomeComponet = () => {
  return (
    <>
      <Head />
      <DynamicMF />
    </>
  )
}

export default HomeComponet
