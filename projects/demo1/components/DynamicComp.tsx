import {EMPFactory, EMPImport, EMPHostsProvider} from './EMPDynamicHost'
type RemoteCompType = {title: string}
const DynamicComp = (): JSX.Element => (
  <EMPHostsProvider hosts={['http://localhost:8000/emp.js']}>
    <h1>Demo 1 Components</h1>
    <div>
      <EMPFactory<RemoteCompType>
        host={{name: 'demo2', module: './home'}}
        props={{title: 'use EMPFactory Component!'}}
      />
      <EMPImport<RemoteCompType> mod={() => import('@d2/home')} props={{title: 'use EmpImport Component!'}} />
    </div>
  </EMPHostsProvider>
)
export default DynamicComp
