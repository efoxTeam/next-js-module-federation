import dynamic from 'next/dynamic'

const DynamicMF = dynamic(() =>
  import('components/dynamic/loadMod').then().then(d => {
    console.log(d)
    return d.default
  }),
)
const Head = dynamic(() => import('components/dynamic/Head').then((mod: any) => mod.default))
const HomeComponet = () => {
  return (
    <>
      <Head />
      <DynamicMF />
    </>
  )
}

export default HomeComponet
