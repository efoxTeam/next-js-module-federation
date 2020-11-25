import React from 'react'
interface HostConfig {
  name: string
  module: string
}
interface RemoteHostProps {
  host: HostConfig
  widgetProps?: any
}
interface tipsI {
  noHost: string | React.ReactNode
  failed: string | React.ReactNode
  loading: string | React.ReactNode
}
interface RemoteHostsPrividerProps {
  tips?: tipsI
  hosts: Array<string>
  children?: any
}

const loadComponent = (remote: string, module: string) => {
  return async () => {
    const factory = await (window as any)[remote].get(module)
    return factory()
  }
}
const remoteHosts: any = {}
const registerHost = (url: string) => {
  remoteHosts[url] = {}
  remoteHosts[url].element = document.createElement('script')
  remoteHosts[url].element.src = url
  remoteHosts[url].element.type = 'text/javascript'
  remoteHosts[url].element.async = true
  document.head.appendChild(remoteHosts[url].element)
  return new Promise((resolve, reject) => {
    remoteHosts[url].element.onload = () => {
      resolve(true)
    }
    remoteHosts[url].element.onerror = () => {
      reject(false)
    }
  })
}
const unregisterAllHost = () => {
  for (const url in remoteHosts) {
    if (remoteHosts[url].element && remoteHosts[url].element.src) document.head.removeChild(remoteHosts[url].element)
  }
}

const useDynamicScript = (hosts: Array<string>) => {
  const [ready, setReady] = React.useState(false)
  const [failed, setFailed] = React.useState(false)

  React.useEffect(() => {
    const registerAllhost = hosts.map(url => registerHost(url))
    Promise.all(registerAllhost)
      .then(rs => {
        const isFail = rs.includes(false)
        if (isFail) {
          setFailed(true)
        } else {
          setReady(true)
        }
      })
      .catch(e => console.error(e))

    return () => {
      unregisterAllHost()
    }
  }, [hosts])

  return {
    ready,
    failed,
  }
}
const NoHostComp = () => <>No Host.</>
const LoadComp = () => <>Loading...</>
const LoadFailComp = () => <>Loading failed</>
export const EMPHostsProvider: React.FC<RemoteHostsPrividerProps> = ({
  hosts,
  children,
  tips = {
    noHost: <NoHostComp />,
    failed: <LoadFailComp />,
    loading: <LoadComp />,
  },
}: RemoteHostsPrividerProps) => {
  const {ready, failed} = useDynamicScript(hosts)
  if (hosts.length === 0) {
    return <div>{tips.noHost}</div>
  }

  if (failed) {
    return <div>{tips.failed}</div>
  }

  if (!ready) {
    return <div>{tips.loading}</div>
  }
  return children
}
export const EMPComponent: React.FC<RemoteHostProps> = ({host, widgetProps}: RemoteHostProps) => {
  const Component = React.lazy(loadComponent(host.name, host.module))
  return (
    <React.Suspense fallback="Loading Button">
      <Component {...widgetProps} />
    </React.Suspense>
  )
}
export const EMPImportComponent = (props: any) => {
  const Component = React.lazy(() => props.mod())
  return (
    <React.Suspense fallback="Loading Button">
      <Component {...props} />
    </React.Suspense>
  )
}
