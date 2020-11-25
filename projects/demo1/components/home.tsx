import {RemoteComponent} from './RemoteComponent'

const Home = () => (
  <>
    <h1>Demo 1 Components</h1>
    <div>
      <RemoteComponent moduleImport={() => import('demo2/home')} />
    </div>
  </>
)
export default Home
