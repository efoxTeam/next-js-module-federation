import EMPDynamic from './EMPDynamic'
const Home = () => (
  <>
    <h1>Demo 1 Components</h1>
    <div>
      <EMPDynamic host={{url: 'http://localhost:8000/emp.js', name: 'demo2', module: './home'}} />
    </div>
  </>
)
export default Home
