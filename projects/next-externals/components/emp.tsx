import {useState, useEffect, lazy, Suspense} from 'react'
interface LoadComponentI {
  [key: string]: any
  url: string
  scope: any
  module: string
  keepAlive?: boolean
}
interface RemoteContainerI {
  [key: string]: {
    url: string
    container: any
    scope: any
    module: {[key: string]: any}
  }
}
declare let __webpack_init_sharing__: any
declare let __webpack_share_scopes__: any
//
const remoteContainer: RemoteContainerI = {}
function loadComponent({url, scope, module}: LoadComponentI) {
  return async () => {
    if (!remoteContainer[scope]) {
      await __webpack_init_sharing__('default')
      const container: any = window[scope]
      await container.init(__webpack_share_scopes__.default)
      remoteContainer[scope] = {
        url,
        container,
        scope,
        module: {},
      }
    }
    if (!remoteContainer[scope].module[module]) {
      const factory = await remoteContainer[scope].container.get(module)
      const Module = factory()
      remoteContainer[scope].module[module] = Module
    }
    return remoteContainer[scope].module[module]
  }
}

const useDynamicScript = ({scope, url, keepAlive = true}: LoadComponentI) => {
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!url) {
      return
    }
    if (remoteContainer[scope]) {
      setReady(true)
      return () => {}
    }
    const element = document.createElement('script')

    element.src = url
    element.type = 'text/javascript'
    element.async = true

    setReady(false)
    setFailed(false)

    element.onload = () => {
      setReady(true)
    }

    element.onerror = () => {
      setReady(false)
      setFailed(true)
    }

    document.head.appendChild(element)

    return () => {
      document.head.removeChild(element)
      if (!keepAlive) delete remoteContainer[scope]
    }
  }, [url])

  return {
    ready,
    failed,
  }
}
const Logger = ({msg}: {msg: string}) => {
  useEffect(() => console.log(msg))
  return <></>
}
function EMPComponent(props: LoadComponentI) {
  const {ready, failed} = useDynamicScript(props)

  if (!props) {
    return <Logger msg="配置信息有误" />
  }

  if (!ready) {
    return <Logger msg='="加载中...' />
  }

  if (failed) {
    return <Logger msg={`${props.url} 加载失败!`} />
  }

  const Component = lazy(loadComponent(props))

  return (
    <Suspense fallback="">
      <Component {...props} />
    </Suspense>
  )
}

export default EMPComponent
