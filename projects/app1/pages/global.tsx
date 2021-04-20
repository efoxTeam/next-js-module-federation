import loadComponent from 'helper/sandbox'
import {useEffect, useState} from 'react'
let Comp = () => <></>
function injectCode({code, scope, module}: any) {
  // console.log('code', code)
  if (typeof window !== 'undefined') {
    const {document}: any = window
    const script = document.createElement('script') //创建一个script标签
    script.type = 'text/javascript'
    try {
      //IE浏览器认为script是特殊元素,不能再访问子节点;报错;
      script.appendChild(document.createTextNode(code))
    } catch (ex) {
      script.text = code
    }
    document.getElementsByTagName('head')[0].appendChild(script)
    // const mod: any = window[scope]
    // Comp = mod.default
  }
}
function useLoadScriptString({code, scope, module}: any) {
  const [clientReady, setClientReady] = useState(false)
  useEffect(() => {
    ;(async () => {
      if (typeof window !== 'undefined') {
        injectCode({code, scope, module})
        const mod: any = window[scope]
        const comp = await mod.get(module)
        Comp = comp().default
        // console.log(Comp)
        setClientReady(true)
      }
    })()
  }, [clientReady])
}
function GLOBALComp(props: any) {
  useLoadScriptString(props)
  // injectCode(props)
  console.log('!!typeof window', !!typeof window)
  return (
    <>
      <h1>Module Federation SSR GLOBAL</h1>
      {/* <DynamicComponent /> */}
      <Comp />
    </>
  )
}
export const getServerSideProps = async (context: any) => {
  const system = {
    url: 'http://localhost:3003/emp.js',
    scope: 'staticHost',
    module: './home',
  }
  const {code, component}: any = await loadComponent(system)
  Comp = component.default
  return {props: {code, ...system}}
}

export default GLOBALComp
