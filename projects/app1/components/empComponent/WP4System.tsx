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
//
const remoteContainer: RemoteContainerI = {}
const loadComponent = ({url, scope, module}: LoadComponentI) => {
  return async () => {
    const factory = await (window as any)[scope].get(module)
    return factory()
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
