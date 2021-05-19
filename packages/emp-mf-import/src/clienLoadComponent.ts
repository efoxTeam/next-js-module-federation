export default function clienLoadComponent({url, scope, module}: LoadComponentI) {
  return async () => {
    await registerHost(url)
    await __webpack_init_sharing__('default')
    const container: any = window[scope]
    await container.init(__webpack_share_scopes__.default)
    const factory = await container.get(module)
    return factory()
  }
}
const remoteHosts: any = {}
const registerHost = (url: string) => {
  return new Promise((resolve, reject) => {
    if (remoteHosts[url]) {
      resolve(true)
    }
    remoteHosts[url] = {}
    remoteHosts[url].element = document.createElement('script')
    remoteHosts[url].element.src = url
    remoteHosts[url].element.type = 'text/javascript'
    remoteHosts[url].element.async = true
    document.head.appendChild(remoteHosts[url].element)

    remoteHosts[url].element.onload = () => {
      resolve(true)
    }
    remoteHosts[url].element.onerror = () => {
      reject(false)
    }
  })
}
