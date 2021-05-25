import serverLoadComponent from './serverLoadComponent'
import clienLoadComponent from './clienLoadComponent'
const loadComponent = typeof window === 'undefined' ? serverLoadComponent : clienLoadComponent
export default loadComponent
