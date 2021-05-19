import serverLoadComponent from './serverLoadComponent'
import clienLoadComponent from './clienLoadComponent'
const loadComponent = typeof window === 'undefined' ? serverLoadComponent : clienLoadComponent
export default loadComponent
export const importMFComponent = async function (system: LoadComponentI) {
  const mod = await loadComponent(system)()
  return mod
}
