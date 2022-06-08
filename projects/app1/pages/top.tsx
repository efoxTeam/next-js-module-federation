import loadComponent, {importMF} from 'components/empComponent/helper/loadComponent'
const DynamicComponent = await importMF({
  url: 'http://localhost:3003/emp.js',
  scope: 'staticHost',
  module: './home',
})

function TopLvAwait() {
  return (
    <>
      <h1>Module Federation SSR</h1>
      <DynamicComponent />
    </>
  )
}

export default TopLvAwait
