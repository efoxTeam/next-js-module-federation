import {EMPComponent, EMPImportComponent, EMPHostsProvider} from './EMPDynamicHost'
const Home = () => (
  <EMPHostsProvider hosts={['http://localhost:8000/emp.js']}>
    <h1>Demo 1 Components</h1>
    <div>
      <EMPComponent host={{name: 'demo2', module: './home'}} widgetProps={{title: 'DateTime:' + Date.now()}} />
      <EMPComponent host={{name: 'demo2', module: './home'}} widgetProps={{title: Date.now()}} />
      <EMPComponent host={{name: 'demo2', module: './home'}} widgetProps={{title: Date.now()}} />
      <EMPImportComponent mod={() => import('demo2/home')} title={'Import Mod'} />
    </div>
  </EMPHostsProvider>
)
export default Home
