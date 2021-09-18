import loadComponent from 'components/empComponent/helper/loadComponent'
const mod = loadComponent({
  url: 'http://localhost:3003/emp.js',
  scope: 'staticHost',
  module: './home',
})

export default mod
