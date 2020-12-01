// import D2Home from '@d2/home'
import D2Dynamic from './DynamicComp'
// import {EMPImport} from './EMPDynamicHost'
const Home = () => (
  <>
    <h1>Nextjs app</h1>
    {/* <D2Home title={'demo2'} /> */}
    <D2Dynamic />
    {/* <EMPImport mod={() => import('@d2/home')} props={{title: 'use EmpImport Component!'}} /> */}
  </>
)
export default Home
