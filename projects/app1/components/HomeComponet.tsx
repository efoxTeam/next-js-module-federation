import dynamic from 'next/dynamic'

const DynamicMF = dynamic(() =>
  import('components/empComponent/helper/loadComponent')
    .then(({importMFComponent}) =>
      importMFComponent({
        url: 'http://localhost:3003/emp.js',
        scope: 'staticHost',
        module: './home',
      }),
    )
    .then(d => {
      // console.log('mf', d.default)
      return d
    }),
)
const Head = dynamic(() =>
  import('components/dynamic/Head').then((mod: any) => {
    // console.log('local', mod.default)
    return mod.default
  }),
)
const HomeComponet = () => {
  return (
    <>
      <Head />
      <DynamicMF />
    </>
  )
}

export default HomeComponet
