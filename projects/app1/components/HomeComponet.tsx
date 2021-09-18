import dynamic from 'next/dynamic'
import {importMF} from 'components/empComponent/helper/loadComponent'
// import mfImport from '@efox/emp-mf-import'

const DynamicMF = dynamic(() =>
  importMF({
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
