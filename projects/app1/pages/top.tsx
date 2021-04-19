import React, {useEffect, useState} from 'react'
import {useServerEffect} from '../hooks/useServerEffect'
function Page() {
  useEffect(() => {
    console.log('isserver', !typeof window)
  }, [])
  useServerEffect(() => {
    console.log('isserver', !typeof window)
  }, [])
  return <div>Next code: </div>
}

const getMF = async (url: string, scope: string) => {
  const code = await fetch(url).then(res => res.text())
  return code
  // const sandbox: any = {
  //   [scope]: {},
  // }
  // vm.createContext(sandbox)
  // const script = new vm.Script(code, {})
  // script.runInContext(sandbox)
  // console.log(sandbox[scope])
  // const factory = await sandbox[scope].get(module)
  // return factory()
}

// Page.getInitialProps = async (ctx: any) => {
//   const code = await getMF('http://localhost:3003/emp.js', 'staticHost')
//   return {code}
// }

export default Page
