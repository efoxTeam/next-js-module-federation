import vm from 'vm'
import {LoadComponentI} from 'components/empComponent/types/index'

export default async function loadComponent({url, scope, module}: LoadComponentI) {
  let code = await fetch(url).then(res => res.text())
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
          console.log('head appendChild', s.src)
          fetch(s.src)
            .then(res => res.text())
            .then(subCode => {
              code += `\n ${subCode}`
              vm.runInContext(subCode, sandbox)
              s.onload()
            })
        },
      },
    },
  }
  vm.createContext(sandbox)
  // console.log(code)
  // console.log('======================================')
  const script = new vm.Script(code, {})
  script.runInContext(sandbox)
  // console.log(sandbox[scope])
  const factory = await sandbox[scope].get(module)
  // console.log('factory', factory())
  // code += `\n ${String(factory)}`
  return {code, component: factory()}
}
