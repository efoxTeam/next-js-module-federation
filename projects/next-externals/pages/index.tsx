import EMPComponent from 'components/emp'
import dynamic from 'next/dynamic'
const StoreComp = dynamic(() => import('components/StoreComp'))
function HomePage() {
  return (
    <>
      <EMPComponent
        url="https://unpkg.bdgamelive.com/@gfe/bdgamelive_home_base@1.0.0-test.11/dist/emp.js"
        scope={'bdgamelive_home_base'}
        module="./Navigator"
        isIndexTop={true}
      />
      <StoreComp />
      <h1>Welcome to Next.js!</h1>
    </>
  )
}

export default HomePage
