import {useAsync, Async} from 'react-async'
import loadComponent from 'components/empComponent/helper/loadComponent'
import dynamic from 'next/dynamic'
const DynamicComponent = dynamic<any>(
  loadComponent({
    url: 'http://localhost:3003/emp.js',
    scope: 'staticHost',
    module: './home',
  }),
)
const Person = () => (
  <Async
    initialValue={DynamicComponent}
    promiseFn={loadComponent({
      url: 'http://localhost:3003/emp.js',
      scope: 'staticHost',
      module: './home',
    })}>
    <Async.Pending>Loading...</Async.Pending>
    <Async.Rejected>{error => <>{error.message}</>}</Async.Rejected>
    <Async.Fulfilled>
      {(mod: any) => {
        const Component = mod.default
        return <Component />
      }}
    </Async.Fulfilled>
  </Async>
)

export default Person
