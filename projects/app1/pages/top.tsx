import loadComponent from 'components/empComponent/helper/loadComponent'
const mod: any = await loadComponent({
  url: 'http://localhost:3003/emp.js',
  scope: 'staticHost',
  module: './home',
})()
const DynamicComponent = mod.default

function TopLvAwait() {
  return (
    <>
      <h1>Module Federation SSR</h1>
      <DynamicComponent />
    </>
  )
}

export default TopLvAwait
