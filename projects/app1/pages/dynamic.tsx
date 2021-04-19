import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('components/dynamic/index'))

const Dynamic: any = () => {
  return (
    <>
      <h1>Dynamic</h1>
      <DynamicComponent
        system={{
          url: 'http://localhost:3003/emp.js',
          scope: 'staticHost',
          module: './home',
        }}
      />
    </>
  )
}
export default Dynamic
