import React from 'react'
const clickFn = () => alert('click me!')
const App = ({title = 'static host'}) => {
  return (
    <>
      <h2>Static Host {title} From Remote EMP HOST [Static Host]</h2>
      <button onClick={clickFn}>另外一个基站的demo</button>
    </>
  )
}

export default App
