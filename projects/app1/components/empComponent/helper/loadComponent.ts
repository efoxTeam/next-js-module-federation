import serverLoadComponent from 'components/empComponent/helper/serverLoadComponent'
import clienLoadComponent from 'components/empComponent/helper/clienLoadComponent'
const loadComponent = typeof window === 'undefined' ? serverLoadComponent : clienLoadComponent
export default loadComponent
