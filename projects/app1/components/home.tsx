import System from './empComponent'
import React from 'react'
import dynamic from 'next/dynamic'
import fetchMF from 'components/empComponent/helper/fetchMf'
import {loadComponent} from 'components/empComponent/helper/clientDynamic'
interface SystemLoadComponentI {
  system: {
    url: string
    scope: any
    module: string
    keepAlive?: boolean
  }
}
const DynamicComponent = dynamic<SystemLoadComponentI>(
  () =>
    new Promise(r => {
      const system = {
        url: 'http://localhost:3003/emp.js',
        scope: 'staticHost',
        module: './home',
      }
      if (typeof window === 'undefined')
        fetchMF(system).then(d => {
          r(d.default)
        })
      else loadComponent(system)().then(d => r(d.default))
    }),
  // {ssr: true},
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
