// import NextHostHome from 'nextHost/home'
import dynamic from 'next/dynamic'
const NextHostHome = dynamic(() => import('nextHost/home'), {
  ssr: false,
})
const Index = () => {
  return (
    <>
      <h1>Home</h1>
      <NextHostHome />
    </>
  )
}
export default Index
