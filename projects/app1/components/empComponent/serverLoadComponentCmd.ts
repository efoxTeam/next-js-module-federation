import vm from 'vm'
import {LoadComponentI} from './types/index'

export default function serverLoadComponentCmd({url, scope, module}: LoadComponentI) {
  return async () => {
    const code = await fetch(url).then(res => res.text())
    const sandbox: any = {
      [scope]: {},
    }
    vm.createContext(sandbox)
    const script = new vm.Script(code, {})
    script.runInContext(sandbox)
    console.log(sandbox[scope])
    const factory = await sandbox[scope].get(module)
    return factory()
  }
}
