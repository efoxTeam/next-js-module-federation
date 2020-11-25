import React from 'react'
interface HostConfig {
  url: string
  name: string
  module: string
}
interface RemoteProps {
  host: HostConfig
  widgetProps?: any
}

const loadComponent = (remote: string, module: string) => {
  return async () => {
    const factory = await (window as any)[remote].get(module)
    return factory()
  }
}

const useDynamicScript = (url?: string) => {
  const [ready, setReady] = React.useState(false)
  const [failed, setFailed] = React.useState(false)

  React.useEffect(() => {
    if (!url) {
      return
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
    }
  }, [url])

  return {
    ready,
    failed,
  }
}

const EMPDynamic: React.FC<RemoteProps> = ({host, widgetProps}: RemoteProps) => {
  const {ready, failed} = useDynamicScript(host.url)

  if (!host) {
    return <div>no system</div>
  }

  if (failed) {
    return <div>Failed</div>
  }

  if (!ready) {
    return <div>loading ...</div>
  }

  const Component = React.lazy(loadComponent(host.name, host.module))
  return (
    <React.Suspense fallback="Loading Button">
      <Component {...widgetProps} />
    </React.Suspense>
  )
}
export default EMPDynamic
