import {EMPComponent, EMPHostsProvider} from './EMPDynamicHost'
const Home = () => (
  <EMPHostsProvider hosts={['http://localhost:8000/emp.js']}>
    <h1>Demo 1 Components</h1>
    <div>
      <EMPComponent host={{name: 'demo2', module: './home'}} />
      <EMPComponent host={{name: 'demo2', module: './home'}} />
      <EMPComponent host={{name: 'demo2', module: './home'}} />
      <EMPComponent host={{name: 'demo2', module: './home'}} />
      <EMPComponent host={{name: 'demo2', module: './home'}} />
      <EMPComponent host={{name: 'demo2', module: './home'}} />
      <EMPComponent host={{name: 'demo2', module: './home'}} />
    </div>
  </EMPHostsProvider>
)
export default Home
