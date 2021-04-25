import React from 'react'
const clickFn = () => alert('click me!')
const App = props => {
  // eslint-disable-next-line react/prop-types
  const {title} = props
  return (
    <>
      <h2>Static Host {title} From Remote EMP HOST [Static Host]</h2>
      <button onClick={clickFn}>另外一个基站的demo</button>
    </>
  )
}

export default App
