import {ComponentType, lazy, Suspense} from 'react'
type RemoteComponentType = {
  moduleImport<T>(): Promise<{default: ComponentType<T>}>
  props?: any
}
export const RemoteComponent = ({moduleImport, props}: RemoteComponentType) => {
  if (typeof window === 'undefined') {
    return null
  }
  console.log('window', !!window)
  const Component = lazy(() => moduleImport())

  return (
    <Suspense fallback={<>loading...</>}>
      <Component {...props} />
    </Suspense>
  )
}
