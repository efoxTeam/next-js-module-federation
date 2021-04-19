import React from 'react'
import dynamic from 'next/dynamic'
import loadComponent from 'components/empComponent/helper/loadComponent'
interface SystemLoadComponentI {
  system: {
    url: string
    scope: any
    module: string
    keepAlive?: boolean
  }
}
const DynamicComponent = dynamic<SystemLoadComponentI>(
  loadComponent({
    url: 'http://localhost:3003/emp.js',
    scope: 'staticHost',
    module: './home',
  }),
)
const Home: any = () => {
  return (
    <>
      <h1>EMP APP SSR</h1>
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
export default Home
