import React from 'react'
interface LoadComponentI {
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
      console.warn(`=== __webpack_init_sharing__ ${scope}===`)
    }
    if (!remoteContainer[scope].module[module]) {
      const factory = await remoteContainer[scope].container.get(module)
      const Module = factory()
      remoteContainer[scope].module[module] = Module
      console.warn(`=== __webpack_init_sharing__ ${scope} - ${module}===`)
    }
    return remoteContainer[scope].module[module]
  }
}

const useDynamicScript = ({scope, url, keepAlive = true}: LoadComponentI) => {
  const [ready, setReady] = React.useState(false)
  const [failed, setFailed] = React.useState(false)

  React.useEffect(() => {
    if (!url) {
      return
    }
    if (remoteContainer[scope]) {
      setReady(true)
      return () => {
        console.log(`keep alive Dynamic Script: ${url}`)
      }
    }
    const element = document.createElement('script')

    element.src = url
    element.type = 'text/javascript'
    element.async = true

    setReady(false)
    setFailed(false)

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`)
      setReady(true)
    }

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`)
      setReady(false)
      setFailed(true)
    }

    document.head.appendChild(element)

    return () => {
      console.log(`Dynamic Script Removed: ${url}`)
      document.head.removeChild(element)
      if (!keepAlive) delete remoteContainer[scope]
      console.log('remoteContainer[scope]', remoteContainer[scope])
    }
  }, [url])

  return {
    ready,
    failed,
  }
}

export default function System(props: any) {
  const system = props.system

  const {ready, failed} = useDynamicScript(system)

  if (!system) {
    return <h2>Not system specified</h2>
  }

  if (!ready) {
    return (
      <>
        <p>{system.url}</p>
      </>
    )
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {system.url}</h2>
  }

  const Component = React.lazy(loadComponent(system))

  return (
    <React.Suspense fallback="Loading...">
      <Component {...props} />
    </React.Suspense>
  )
}
