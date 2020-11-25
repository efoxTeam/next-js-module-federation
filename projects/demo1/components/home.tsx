// import Home2 from 'demo2/home'
import {RemoteComponent} from './RemoteComponent'
const Home = () => (
  <>
    <h1>Demo 1 Components</h1>
    <div>
      <RemoteComponent scope="demo2" module="home" />
    </div>
  </>
)
export default Home
