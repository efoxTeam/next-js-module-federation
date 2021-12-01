import EMPComponent from 'components/emp'
import dynamic from 'next/dynamic'
const StoreComp = dynamic(() => import('components/StoreComp'))
function HomePage() {
  return (
    <>
      <EMPComponent url="http://localhost:8001/emp.js" scope={'microHost'} module="./App" isIndexTop={true} />
      <StoreComp />
      <h1>Welcome to Next.js!</h1>
    </>
  )
}

export default HomePage
