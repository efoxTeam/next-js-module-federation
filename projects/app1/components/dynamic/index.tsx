import loadComponent from 'components/empComponent/helper/loadComponent'
import {useEffect} from 'react'

const DynamicComponent = ({system}: any) => {
  return <>DynamicComponent:{JSON.stringify(system)}</>
}
export default DynamicComponent
