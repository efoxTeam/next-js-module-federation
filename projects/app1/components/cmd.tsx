import {GetStaticProps, GetStaticPaths, GetServerSideProps} from 'next'
import React, {useEffect, useState} from 'react'
import serverLoadComponentCmd from 'components/empComponent/helper/serverLoadComponentCmd'

function System(props: any) {
  const [view, setView]: any = useState([null])
  useEffect(() => {
    ;(async () => {
      console.log('server render')
      const factory = await serverLoadComponentCmd(props.system)
      setView(factory())
      console.log(view)
    })()
  }, [])
  return view
}
const CMD: any = () => {
  return (
    <>
      <h1>Cmd</h1>
      <System
        system={{
          url: 'http://localhost:3003/emp.js',
          scope: 'staticHost',
          module: './home',
        }}
      />
    </>
  )
}
export default CMD

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {},
  }
}
