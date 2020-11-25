import {lazy, Suspense} from 'react'
type RemoteComponentType = {
  scope: string
  module: string
  props?: any
}
export const RemoteComponent = ({scope, module, ...props}: RemoteComponentType) => {
  if (typeof window === 'undefined') {
    return null
  }
  const Component = lazy(() => import(`${scope}/${module}`))

  return (
    <Suspense fallback={<>loading...</>}>
      <Component {...props} />
    </Suspense>
  )
}
