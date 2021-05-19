export default function clienLoadComponent({url, scope, module}: LoadComponentI) {
  return async () => {
    await registerHost(url)
    const factory = await (window as any)[scope].get(module)
    // console.log('factory', factory())
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
