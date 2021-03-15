import React, {useEffect, useState} from 'react'
import fetchMF from './helper/fetchMf'

export default function System(props: any) {
  const [view, setView]: any = useState([null])
  console.log('view', view)
  useEffect(() => {
    console.log('view', view)
    ;(async () => {
      console.log('server render')
      const factory = await fetchMF(props.system)
      setView(factory())
      console.log(view)
    })()
  }, [])
  return view
}
