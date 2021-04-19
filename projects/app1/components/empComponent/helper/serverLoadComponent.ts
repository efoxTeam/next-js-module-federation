import vm from 'vm'
import {LoadComponentI} from '../types/index'

export default function serverLoadComponent({url, scope, module}: LoadComponentI) {
  return async () => {
    const code = await fetch(url).then(res => res.text())
    const sandbox: any = {
      [scope]: {},
      self: {},
      setTimeout(...args: any) {
        // console.log('setTimeout', args)
      },
      clearTimeout(...args: any) {
        // console.log('clearTimeout', args)
      },
      document: {
        getElementsByTagName(o: any) {
          // console.log('getElementsByTagName', o)
          return []
        },
        createElement(o: any) {
          // console.log('createElement', o)
          return {
            charset: '',
            setAttribute(o: any, p: any) {
              // console.log('setAttribute', o, p)
            },
          }
        },
        setAttribute(o: any, p: any) {
          // console.log('setAttribute', o, p)
        },
        head: {
          appendChild(s: any) {
            // console.log('head appendChild', s)
            fetch(s.src)
              .then(res => res.text())
              .then(code => {
                vm.runInContext(code, sandbox)
                s.onload()
              })
          },
        },
      },
    }
    vm.createContext(sandbox)
    const script = new vm.Script(code, {})
    script.runInContext(sandbox)
    // console.log(sandbox[scope])
    const factory = await sandbox[scope].get(module)
    console.log('factory', factory())
    return factory()
  }
}
