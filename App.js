import React from 'react'

const App = () => {

  const apiGet=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then(json => console.log(json))}

  return (
    <>
      <button onClick={apiGet}>GetData</button>
    </>
  )
}

export default App
