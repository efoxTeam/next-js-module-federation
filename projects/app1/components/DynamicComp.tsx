import {EMPFactory, EMPHostsProvider} from './EMPDynamicHost'
const DynamicComp = (): JSX.Element => (
  <EMPHostsProvider
    hosts={[
      'http://localhost:3003/emp.js', // static host
      'http://localhost:3002/_next/static/runtime/emp.js',
    ]}>
    <h1>App 1</h1>
    <div>
      <EMPFactory<{title: string}>
        host={{name: 'staticHost', module: './home'}}
        props={{title: 'use EMPFactory Component!'}}
      />
      {/* <EMPFactory host={{name: 'nextHost', module: './home'}} /> */}
    </div>
  </EMPHostsProvider>
)
export default DynamicComp
