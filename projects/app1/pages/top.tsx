import loadComponent, {importMF} from 'components/empComponent/helper/loadComponent'
const DynamicComponent = await importMF({
  url: 'http://localhost:3003/emp.js',
  scope: 'staticHost',
  module: './home',
})
/* const DynamicComponent = await importMF({
  url: 'https://cweb-test.yy.com/bdgamelive/bdgamelive_share_emp.js',
  scope: 'bdgamelive_share_emp_1_0',
  module: './mobile/revenueList/index',
}) */
// const DynamicComponent = mod.default

function TopLvAwait() {
  return (
    <>
      <h1>Module Federation SSR</h1>
      <DynamicComponent />
    </>
  )
}

export default TopLvAwait
