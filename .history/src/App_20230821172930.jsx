import { useState } from 'react'
import './App.css'

const App = () => {

  const [name, setName] = useState("world")

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave']
    const int = Math.floor(Math.random() * 3)
    setName(names[int])
  }


  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }





  return (
    <>
      <p >Hello {name}!</p>
      <div>
        <button onClick={handleNameChange} >Click it</button>
        <button onClick={() => handleClick2('Akinmiday')} >Click it</button>
      </div>
    </>
  )
}

export default App