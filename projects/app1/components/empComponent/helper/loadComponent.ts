import serverLoadComponent from 'components/empComponent/helper/serverLoadComponent'
import clienLoadComponent from 'components/empComponent/helper/clienLoadComponent'
import {LoadComponentI} from 'components/empComponent/types/index'
const loadComponent = typeof window === 'undefined' ? serverLoadComponent : clienLoadComponent
export default loadComponent
export const importMFComponent = async function (system: LoadComponentI) {
  const mod = await loadComponent(system)()
  return mod
}
